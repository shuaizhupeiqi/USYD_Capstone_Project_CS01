# index



## Introduction

> This document provides an overview of the Heat Stress Notification Service (HSNS), a Node.js application designed to send email alerts to users about potential heat stress based on their location and environmental conditions. The service utilizes Firebase functions, Firebase Admin SDK, and Nodemailer for email dispatch.

## Prerequisites

- Node.js installed on the development machine.
- A Firebase project with Firebase Functions enabled.
- Access to Firebase Admin SDK and credentials set up for the project.
- A Gmail account for sending emails through Nodemailer.

## Installation

1. Clone the repository to your local machine.
2. Navigate to the project directory and install dependencies:

```
bashCopy code
npm install firebase-functions firebase-admin nodemailer
```

1. Initialize Firebase Admin SDK with your project credentials.

## Configuration

Set up your environment variables in Firebase functions to store sensitive information such as the Gmail email and password:

```
const gmailEmail = functions.config().gmail.email;
const gmailPassword = functions.config().gmail.password;
```

## Nodemailer Transport Setup

Create a transport for sending emails using Nodemailer with Gmail credentials:

```
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: gmailEmail,
    pass: gmailPassword,
  },
});
```

## Detailed Recommendation Tips

The `detailedRecommendationTips` object contains an array of tips with associated icons and risk levels. These tips are used to provide users with advice based on the current heat stress risk level.

Example:

```
{
  icon: "waterBottle",
  label: "Drink at least 250 ml of water every hour...",
  riskLevel: ["Low", "Moderate", "High", "Extreme"],
}
```

## Functions

### generateChartImage

Generates a URL for a chart image that visualizes the risk level data for the day.

```
async function generateChartImage(todayData) {
  // ...construct chart data and configuration
  const chartUrl = `https://quickchart.io/chart?c=${encodedConfig}`;
  return chartUrl;
}
```

### calculateCondition

Determines if a user's environmental conditions meet a specific threshold for heat stress risk.

```
async function calculateCondition(userData) {
  // ...retrieve and calculate heat stress data
  return res;
}
```

### getRecommendationsForRiskLevel

Generates HTML content with recommendations for a given risk level.

```
function getRecommendationsForRiskLevel(riskLevel, images) {
  // ...filter and map tips to HTML
  return recommendationsHTML;
}
```

### checkVerifiedUsersLogic

Main logic for retrieving user data, calculating conditions, generating recommendations, and sending emails to verified users.

```
async function checkVerifiedUsersLogic() {
  // ...logic to send emails to users
}
```

## Scheduled Function

The `checkVerifiedUsers` Firebase function is scheduled to run daily at midnight, Sydney time. It checks for verified users, retrieves their data, performs calculations, and sends emails if necessary.

```
exports.checkVerifiedUsers = functions
  .runWith({ /* ... */ })
  .pubsub.schedule("0 0 * * *")
  .timeZone("Australia/Sydney")
  .onRun(async (context) => {
    // ...call checkVerifiedUsersLogic
  });
```

## Usage

Deploy the functions to Firebase, and they will execute according to the schedule set in the `checkVerifiedUsers` function.

## Testing

For testing purposes, you can invoke `checkVerifiedUsersLogic` directly with an HTTPS request or by using the Firebase Functions shell.

## Conclusion

The HSNS is a robust system designed to provide timely notifications to users about heat stress risks. By leveraging cloud functions, real-time data processing, and automated email notifications, the service aims to promote awareness and safety during extreme heat conditions.

For further development or contributions, please ensure to follow the existing coding standards and add appropriate unit tests for new features to maintain the reliability and quality of the service.
