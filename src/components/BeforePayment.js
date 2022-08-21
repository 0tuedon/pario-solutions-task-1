import React, { useState } from "react";
import PropTypes from "prop-types";
import {
  Box,
  Flex,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
} from "@chakra-ui/react";
import PersonalInfo from "./PersonalInfo";
import BillingInfo from "./BillingInfo";
import ConfirmPayment from "./ConfirmPayment";

const BeforePayment = (props) => {
  const [tabIndex, setTabIndex] = useState(0);
const {setPage} = props
  // listener for tab
  const handleTabsChange = (index) => {
    setTabIndex(index);
  };
  return (
    <Box marginX={["auto"]} paddingTop={["189px"]} maxWidth={["710px"]}>
      {/* Complete header */}
      <Text fontWeight={[700]} color={"#4E598C"} fontSize={["36px"]}>
        Complete your Purchase
      </Text>

      {/* Tab */}
      <Tabs>
        <TabList>
          <Tab>One</Tab>
          <Tab>Two</Tab>
          <Tab>Three</Tab>
        </TabList>
      </Tabs>

      {/* forms component */}
        {tabIndex === 0 &&<PersonalInfo tab={tabIndex} setTab={setTabIndex}/>}
        {tabIndex === 1 && <BillingInfo tab={tabIndex} setTab={setTabIndex}/>}
        {tabIndex === 2 && <ConfirmPayment setPage={setPage}/>}
    </Box>
  );
};

BeforePayment.propTypes = {};

export default BeforePayment;
