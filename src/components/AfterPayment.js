import React from "react";
import PropTypes from "prop-types";
import { Box, Flex, Image, Text } from "@chakra-ui/react";

const AfterPayment = (props) => {
  return (
    <Flex justifyContent={["center"]}>
      {/* White */}
      <Flex
        marginTop={["300px"]}
        width={["801px"]}
        maxWidth={["801px"]}
        height={["480px"]}
        zIndex={[10]}
        rowGap={["30px"]}
        direction={["column"]}
        alignItems={["center"]}
        shadow={["md"]}
        backgroundColor={["white"]}
      >
        <Box>
          <Image src="/svgs/tick.svg" />
        </Box>
        <Text
        fontSize={["48px"]}
        color={["#4E598C"]}
        fontWeight={[700]}
        >Purchase Completed</Text>
        <Text fontSize={["20px"]}
        maxWidth={["404px"]}
        >
          Please check your email for details concerning this transaction
        </Text>

        <Text 
         backgroundClip={"text"}
         backgroundSize={"100%"}
         backgroundImage={` linear-gradient(180deg, #F2C94C 0%, #F2994A 100%);`}
         fill={"transparent"}
        textDecoration={["underline"]}>Return Home</Text>
      </Flex>
    </Flex>
  );
};

AfterPayment.propTypes = {};

export default AfterPayment;
