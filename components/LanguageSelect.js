import React, { useEffect } from "react";
import { withRouter } from "next/router";
import { Select } from "antd";
import { atom, useRecoilState, useRecoilValue, selector, useSetRecoilState } from "recoil";
import { LanguageHelper } from "../helpers/languageHelper";

// identify the basic state  unit
export const loadingState = atom({
  key: 'loadingState',
  default: true
});

export const supportedLanguagesState = atom({
  key: 'supportedLanguagesState',
  default: []
});

export const defaultLanguageState = atom({
  key: 'defaultLanguageState',
  default: 'English'
});

// Selector is derived data that can calculate, process or transform state
export const languagesForSelect = selector({
  key: 'languagesForSelect',
  get: ({get}) => {
    const languages = get(supportedLanguagesState);
    return languages.map(item => ({
      key: item.language,
      label: item.label,
      value: item.language,
    }));
  }
});

function LanguageSelect(props) {
  // Use Recoil’s hooks to manage state
  const [loading, setLoading] = useRecoilState(loadingState);
  const setSupportedLanguages = useSetRecoilState(supportedLanguagesState);
  const [defaultLanguage, setDefaultLanguage] = useRecoilState(defaultLanguageState);
  const items = useRecoilValue(languagesForSelect);
  //loading language list, update related state
  useEffect(() => {
    async function loadSupportedLanguage() {
      const { languageHelper } = props;
      let res = await languageHelper.loadSupoortLanguage();
      setSupportedLanguages(res.supported);
      setDefaultLanguage(res.default);
      setLoading(false);
    }
    loadSupportedLanguage();
  }, [props, setSupportedLanguages, setDefaultLanguage, setLoading]);

  const onChange = (value) => {
    const { languageHelper } = props;
    languageHelper.changeLanguage(value);
  };

  // Display an empty div if loading, otherwise display the main content
  if (loading) return <div />;

  return (
    <div>
      <Select
        showSearch
        style={{ width: "100%" }}
        placeholder="Select a Language"
        optionFilterProp="children"
        onChange={onChange}
        defaultValue={defaultLanguage}
        filterOption={(input, option) =>
          (option?.label ?? "").toLowerCase().includes(input.toLowerCase())
        }
        options={items}
      />
    </div>
  );
}

// Retain the higher-order functions of withRouter and LanguageHelper
export default withRouter(LanguageHelper(LanguageSelect));