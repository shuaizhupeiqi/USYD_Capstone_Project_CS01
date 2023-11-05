# LanguageHepler



## Introduction

> The `LanguageHelper` module defines a higher-order component (HOC) in React, which is an advanced pattern for reusing component logic. Specifically, an HOC is a function that takes a component and returns a new component, augmenting the original component with additional properties or logic.

## Details

### languageHelper Object

The `languageHelper` object encapsulates functions for managing language-related tasks:

- `translation(fileName, loadAll = false)`: This function is responsible for loading translation files for a specified language. It reads the user's language setting from cookies, defaulting to a predefined language if none is set. It then imports the corresponding language's JSON translation file.
- `changeLanguage(changeLanguageTo)`: This function allows users to change the application's language. It saves the new language setting to cookies and updates the current page's URL to potentially include a new query parameter reflecting the language change.
- `loadSupportLanguage()`: Loads a list of supported languages and the default language from a configuration file.

### LanguageHelper Class

This is a React component class that passes the `languageHelper` object as a prop to the wrapped component. This means any component wrapped with `LanguageHelper` will be able to receive and use the `languageHelper` object.

### Function Return Value

The return value of the `LanguageHelper` function is a new component class that renders the wrapped component and passes `languageHelper` as a prop to it.

## Usage

Wrap your component with `LanguageHelper` to provide it with language management capabilities:

```
import { LanguageHelper } from './LanguageHelper';

class MyComponent extends React.Component {
  // Your component code
}

export default LanguageHelper(MyComponent);
```

Now, `MyComponent` can access language-related functionalities through `this.props.languageHelper`.

## Conclusion

The design philosophy behind this HOC is to abstract language-related logic and functionalities from the main component, allowing for reuse across multiple components. When you need to handle language-related features in a React component, simply wrap it with `LanguageHelper`, and you can invoke these functionalities within the component via `this.props.languageHelper`.