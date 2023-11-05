# Function 6: Settings Page Visualization

The visualization of this page starts from the render method.

1. It is used to determine whether the email has been verified; this is still the content in the top left corner where the user logs in.

```
    {this.state.isLoggedIn && !this.state.isEmailVerified
            ? this.NotVerifiedHeader()
            : null}
          {this.state.loading ? (
            <LoadingCard />
          ) : (
```

1. The remaining form buttons are components from Ant Design.

```
 <Form
              ref={this.formRef}
              labelCol={{
                span: 24,
              }}
              wrapperCol={{
                span: 24,
              }}
              layout="vertical"
              initialValues={this.state.data}
              onValuesChange={this.onFormValueChange}
              size={this.state.componentSize}
              style={{
                maxWidth: "100%",
              }}
              onFinish={this.onSaveData}
              onFinishFailed={this.onSaveDataFailed}
            >
              <Divider orientation="left" id={settingPageStyle.userNameDivider}>
                {this.state.isLoggedIn ? this.UserNameHeader() : null}
              </Divider>
              <Form.Item>
                {this.state.isLoggedIn ? (
```