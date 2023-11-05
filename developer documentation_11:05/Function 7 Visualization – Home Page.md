# Feature 7: Homepage Visualization

The main file for this feature is `components/HssRiskDisplay.js`, which involves the design of all components on the homepage.

First, let's outline the several functionalities of the homepage visualization:

1. **Location Dropdown and Locate Me**: This row has already been implemented in Features 1 and 2. The frontend UI design for this is not in `HssRiskDisplay.js` but in `components/Addressdropdown.js`.

2. **Current Risk Assessment**: The `renderRiskValueDisplay` method is the box below the dropdown that assesses the risk. This method primarily judges the status, and the main UI part rendered is in the `riskValueDisplay` component.

   ```
   riskValueDisplay() {
     return (
       <div>
         <Col>
           <Row span={3} id={hssRiskDisplayStyle.currentRiskLabelRow}>
             <p className={hssRiskDisplayStyle.riskLevelHeader}>
               {this.state.translation.CurrentHssLabel}
             </p>
             <PopOver
               content={this.detailedRecommendation(this.state.riskLevel)}
               child={
                 <p className={hssRiskDisplayStyle.riskLevelLabel}>
                   {this.state.translation[this.state.riskLevel]}
                 </p>
   ```

3. **Risk Values for Three Demographics**: The `renderAgeGroupRiskDisplay` method is mainly for passing parameters to `components/AgeGroupRisk.js`, which details the display for this part. This section uses many CSS files, which could be optimized with Ant Design.

4. **Personalized Settings Bar**: This part is `renderPersonalizedSettingsButton`.

   ```
   // Component for setting personal information
   renderPersonalizedSettingsButton() {
     return this.state.loading ? (
       <LoadingCard />
     ) : (
       <div>
         <Row>
           <Button
             id={hssRiskDisplayStyle.personalizedButton}
             type="primary"
             onClick={this.handleSettingPage.bind(this)}
             icon={<SettingOutlined />}
           >
   ```

   In this section, the horizontal bars that show the maximum and minimum risk in four colors are also included.

   ```
   {/* This block is the bar below setting personal information */}
   
         <BottomLegend
           legendNow={this.state.legendNow}
           legendMax={this.state.legendMax}
           loading={this.state.loading}
           portialLegendNow={this.state.portialLegendNow}
           portialLegendMax={this.state.portialLegendMax}
         />
         
   ```

5. **Detailed Recommendation Dropdown**:

   ```
   // Detailed Recommendations dropdown section
   renderDetailedRecommendationCollapse() {
     return this.state.loading ? (
       <LoadingCard />
     ) : (
       
       <div>
         <Collapse className={hssRiskDisplayStyle.collapseForecast}>
           <Panel
             header={this.state.translation.DetailedRecommendationLabel}
             key="1"
   ```

6. **Today's Forecast**:

   ```
   // Today's forecast
   renderTodayForecastCollapse() {
     return this.state.loading ? (
       <LoadingCard />
     ) : (
       <div>
         <Collapse
           className={hssRiskDisplayStyle.collapseForecast}
           defaultActiveKey={["1"]}
         >
           <Panel header={this.todayForecastDividerHeader()} key="1">
             <Col>
               <Chart
   ```

7. **Forecast for the Coming Days**:

   ```
   // Forecast for the coming days
   renderNextDaysForecast() {
     return this.state.loading ? (
       <LoadingCard />
     ) : (
       <div>
         {/* <Divider orientation="left">{this.state.translation.ForecastsForNextDaysLabel}</Divider> */}
         {this.state.forecasts.map((forecast, key) => {
           return (
             <Collapse
               key={key + "collspa"}
               className={hssRiskDisplayStyle.collapseForecast}
             >
               <Panel
   ```

8. **Map Rendering at the Bottom**:

   ```
   renderMap() {
     return this.state.loading ? (
       <LoadingCard />
     ) : (
       <CustomizedMap
         centerCoordinates={[
           this.state.parameters.latitude,
           this.state.parameters.longitude,
         ]}
         markerCoordinates={[
           this.state.parameters.l
           
   ```
