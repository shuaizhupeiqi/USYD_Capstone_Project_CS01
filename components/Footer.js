import { Layout, Row, Col, Image } from "antd";
import { LanguageHelper } from "../helpers/languageHelper";
import React, { useState, useCallback, useEffect } from "react";
import { withRouter } from "next/router";
import LoadingCard from "./LoadingCard";
import { useLanguage } from "../hooks/useLanguage";
import { volcano } from '@ant-design/colors';

const basePath = process.env.NEXT_PUBLIC_BASE_PATH;  //Life cycle management, page formatting
const landscapeWindowWidth = 768;
const phoneWindowWidth = 475;

const layoutStyle = {
  width: '100%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  padding: '1rem',
  backgroundColor: volcano[5] // from generalStyle.WebsiteTheme
};

const mainRowStyle = {
  width: '91%',
  marginRight: '2%',
};

const Footer = (props) => {
  const {
    languageHelper
  } = props

  const [landscape, setLandscape] = useState(false)
  const [loading, setLoading] = useState(false);
  const translation = useLanguage(languageHelper, 'Footer', {
    copyright: "© 2023 - Heat and Health Research Incubator, USYD.",
  })

  const handleResize = useCallback(() => {
    setLandscape(window.innerWidth > 770)
  }, [])

  useEffect(() => {
    handleResize()
    window.addEventListener("resize", handleResize)
    return () => {
      window.removeEventListener("resize", handleResize);
    }
  }, [])

  return (
    <>
      {loading ? (
        <LoadingCard />
      ) : (
        <Layout
          style={layoutStyle}
        >
          <Row
            justify="space-between"
            align="middle"
            style={mainRowStyle}
          >
            <Col span={12}>{translation.copyright}</Col>
            <Col>
              <Image
                src={`${basePath}/icons/usyd-logo.png`}
                alt="Univeristy of Sydney"
                width={120}
                preview={false}
                loading="lazy"  // Add lazy loading attribute here
              />
            </Col>
          </Row>
        </Layout>
      )}
    </>
  )
}

export default withRouter(LanguageHelper(Footer));
