# Function 5: Settings Visualization

The visualization on the settings page is divided into two parts: one for login visualization and one for selecting personal information visualization.

In the login visualization, the starting part is as follows, in the first few lines of the render part of settingpage.js. If the user has opened the profile, i.e., after logging in, clicking on manage your profile will display the username, email, and subscription status.

```

 render() {
    return (
      <div className={this.state.openProfile ? settingPageStyle.fixed : null}>    
{/* Determine if the user has opened the profile */}
        {this.state.openProfile ? (
          <Profile
            doSignOut={this.doSignOut}
            closeProfilePage={this.closeProfilePage}
          />
```
In the code above, the Profile file is loaded, components/Profile.js, which contains all the components of the user login page. The main data flow is the loadData method, which mainly stores user login information from Firebase.

```
let user = await getUserInfo();
```

This user contains all the information of the logged-in user, updating this information to the current state. There are other methods that directly call user.email, etc., instead of getting information from the current state. In any case, the final information all comes from the user.

```
 async loadData() {
    let user = await getUserInfo();
    // The user will return a lot of comprehensive personal information including email
    if (user) {
      // Get the user's uid. Then pass it to readData and assign it to dataFromFirebase, but in fact, the user already contains this information, which may be a redundant operation.
      const dataFromFirebase = await readData(`users/${user.uid}`);
      let subscribed = dataFromFirebase?.emailSubscription;
      let phoneNumber = dataFromFirebase?.phoneNumber;
      let phoneSubscription = dataFromFirebase?.phoneSubscription;
      if (subscribed == undefined) {
        subscribed = false;
      }
      this.setState({
        user: user,
        emailSubscription: subscribed,
        loading: false,
        emailVerified: user.emailVerified,
        phoneNumber: phoneNumber,
        phoneSubscription: phoneSubscription,
      });
    } else {
      showAlert(
        "error",
        this.state.translation.Alert.Error.SomethingWentWrongTitle,
        this.state.translation.Alert.Error.FetchingProfile
      );
    }
  }
```

After loadData, the rest of the content is all about UI design, which calls CSS components that need to be replaced with Ant Design. In the remaining UI design, there are some functions to modify phone numbers, log in, log out, subscribe, etc.

```
// Main page rendering
  renderMainView() {
    return (
      <div className={profileStyle.validationCard}>
        
        {this.state.loading ? (
          <LoadingCard />
        ) : this.state.user ? (
          <div>
             {/* When there is a value for user, the following will be rendered */}
            <div id={profileStyle.closeProfilePageIconRow}>
              {/* A <div> with a close icon, which calls */}
              <div
                onClick={this.closeProfilePageFromIcon}  
                id={profileStyle.closeProfilePageIconDiv}
              >
                <CloseOutlined
                  className={profileStyle.icon}
                  id={profileStyle.closeProfilePageIcon}
                />
              </div>
            </div>
            {/* A title row that displays "Manage Profile" or its corresponding translation, depending on manageProfileTitle */}
            <Row id={profileStyle.manageProfileTitle}>
              <div>
                <p>{this.state.translation.ManageProfile}</p>
              </div>
            </Row>
            <div id={profileStyle.mainSubDiv}>
              {this.renderUserNameDisplay()} {/* Username display */}
              {this.renderEmailDisplay()} {/* Email display */}
              {this.renderManageSubscriptionsDisplay()} {/* Subscription management display */}
              {this.renderPhoneDisplay()} {/* Phone number display */}
            </div>
            {this.renderSignOutButton()} {/* Sign out button */}
          </div>
        ) : null}
      </div>
    );
  }
```
