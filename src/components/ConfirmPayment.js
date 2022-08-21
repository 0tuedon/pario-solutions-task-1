import { Box, Button, Flex, Text } from "@chakra-ui/react";
import React from "react";

const ConfirmPayment = (props) => {
  const { setPage } = props;
  return (
    <Flex 
    direction={["column"]}
    rowGap={["69px"]}
    background={"#ffffff"} marginTop={["66px"]}>
      {/* White panel */}

      <Box
        width={["100%"]}
        zIndex={10}
        borderRadius={["10px"]}
        backgroundColor={"white"}
        height={["405px"]}
        shadow={["lg"]}
      
      >
        <Flex
          alignItems={["center"]}
          borderTopRadius={["10px"]}
          backgroundColor={["#2F80ED"]}
        >
          <Flex
            zIndex={10}
            height={[70]}
            marginX={["auto"]}
            width={["561px"]}
            fontWeight={[700]}
            alignItems={["center"]}
            fontSize={["20px"]}
            color={["white"]}
            background={"#2F80ED"}
            justifyContent={["space-between"]}
          >
            <Text>Item Name</Text>
            <Box as={Flex} alignItems={["center"]} columnGap={["10px"]}>
              <Text fontSize={["25px"]}>&#8358;</Text>
              <Text>Price</Text>
            </Box>
          </Flex>
        </Flex>

        {/* Main part */}
        <Box
          as={Flex}
          marginTop={["62px"]}
          flexDirection={["column"]}
          rowGap={["40px"]}
          maxWidth={["556px"]}
          marginX={["auto"]}
        >
          <Flex justifyContent={["space-between"]} color={["#4E598C"]}>
            <Text fontSize={["20px"]}>Data science and usability</Text>
            <Text fontSize={["20px"]} fontWeight={[700]}>
              50,000.00
            </Text>
          </Flex>
          <Flex
            justifyContent={["space-between"]}
            color={["#4E598C"]}
            fontSize={["20px"]}
          >
            <Text>Shipping</Text>
            <Text color={"#000000"}>0.00</Text>
          </Flex>
        </Box>

        {/* Underline */}
        <Box
          marginTop={["37px"]}
          backgroundColor={"#817E9E"}
          marginX={["auto"]}
          width={["687px"]}
          height={["1px"]}
        />

        {/* Total */}

        <Box
          maxWidth={["618px"]}
          height={["68px"]}
          border={["1px solid #817E9E"]}
          as={Flex}
          paddingX={["19px"]}
          marginTop={["39px"]}
          justifyContent={["space-between"]}
          marginX={["auto"]}
          borderRadius={["5px"]}
          alignItems={["center"]}
        >
          <Text fontSize={["20px"]} color={["#817E9E"]}>
            Total
          </Text>
          <Text fontSize={["20px"]} fontWeight={[700]} color={["#4E598C"]}>
            50,000.00
          </Text>
        </Box>
      </Box>

      <Flex columnGap={["78px"]} paddingBottom={["111px"]} marginTop={["80px"]}>
        {/* NExt Button */}
        <Button
          height={["58px"]}
          onClick={() => {
            setPage(2);
          }}
          _active={{ opacity: 0.3 }}
          _hover={{ opacity: 0.7 }}
          width={["238px"]}
          borderRadius={["10px"]}
          color={["#F7F7FF"]}
          background={`linear-gradient(180deg, #F2C94C 0%, #F2994A 100%);`}
        >
          Pay
        </Button>

        <Button
          background={"none"}
          height={["58px"]}
          _active={{ opacity: 0.3 }}
          _hover={{ opacity: 0.7 }}
          color={"#4E598C"}
        >
          Cancel Payment
        </Button>
      </Flex>
    </Flex>
  );
};

export default ConfirmPayment;
