import { Flex } from "@chakra-ui/react";
import HypeLogo from "./HypeLogo";
import { useContext } from "react";
import { AppContext } from "../context/AppContext";
import { DarkModeSwitch } from "./DarkModeSwitch";

export const Header = () => {
	const { colorMode } = useContext(AppContext);

	return (
		<Flex 
			justifyContent="between" 
			alignItems="center"
			position="sticky"
			zIndex="1"
			px='10px'
			bg={colorMode === "dark" ? "navigation" : "white"}  
	 	>
			<Flex w={"100%"} h={"80px"} alignItems={"center"} px={4}>
						<HypeLogo
							fillColor={colorMode === "dark" ? "white" : "black"}
							height={30}
						/>
      </Flex>
			<DarkModeSwitch />
    </Flex>
		);
}