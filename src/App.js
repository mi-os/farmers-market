import React from 'react';
import {
  ChakraProvider,
  Box,
  Image,
  Heading,
  Text,
  VStack,
  Flex,
  theme
} from '@chakra-ui/react';
import { Header } from './components/Header';
import { HeroSlider } from './components/HeroSlider';
import { SectionTitle } from './components/SectionTitle';
import { LeadButton } from './components/LeadButton';
import { Footer } from './components/Footer';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Box textAlign="center" fontSize="xl" pb={{ base: 10, md: 20 }}>
        <Header />
        <VStack spacing={{ base: 20, md: 40}}>
          <Box>
              <HeroSlider />
          </Box>
          <Box id="about_us" maxWidth="1250px" px="5" py={{ md: 10 }} pt={{ base: 8 }}>
            <SectionTitle mainTitle="私たちについて" subTitle="about us" />
            <Flex wrap={{ base: "wrap", md: "nowrap" }} justifyContent="space-evenly" alignItems="center" my={{ md: 20 }}>
              <Box mx={{ base: "auto", md: 2 }}>
                <Image w={{ base: "70vw", sm: "80vw", md: "50vw" }} maxWidth="500px" src="./images/cabbage.jpg" alt="cabbage"/>
              </Box>
              <Box my={{ base: 8, md: "auto" }}　m={{ md: 10 }}>
                <Text fontSize={{ base: "16px", md: "22px" }} textAlign="left" mb={8}>
                  当農園では有機農法にこだわった新鮮野菜や、ハウス栽培のくだものを作っています。
                </Text>
                <Text fontSize={{ base: "16px", md: "20px" }} textAlign="left" mb={4}>
                  代表　野菜 食べ太郎
                </Text>
                <Text fontSize={{ base: "14px", md: "20px" }} textAlign="left" mb={2}>
                  長野県豊作市みどり1-2-3
                </Text>
                <Text fontSize={{ base: "14px", md: "20px" }} textAlign="left">
                  contact@farmers-market-demo.site
                </Text>
              </Box>
            </Flex>
          </Box>
          <Box id="item" px="5" py={{ md: 10 }}>
            <Box mb={8}>
              <SectionTitle mainTitle="商品紹介" subTitle="item" />
            </Box>
            <Box mt={5}>
              <LeadButton name="オンラインショップへ" href="https://bootcamp-test-app.myshopify.com/" />
            </Box>
          </Box>
          <Box id="about_farm" maxWidth="1250px" px="5" py={{ md: 10 }} pt={{ base: 8 }}>
            <SectionTitle mainTitle="農園紹介" subTitle="about farm" />
            <Flex justifyContent="center" alignContent="space-around" flexWrap="wrap">
              <Flex justifyContent="space-around" alignItems="center" flexWrap={{base: "wrap", md: "nowrap"}} my={{ base: 10, md: 20 }}>
                <Box>
                  <Image src="./images/cornfield.jpg" w={{ base: "70vw", sm: "80vw", md: "50vw" }} maxWidth="600px" alt="corn-field" />
                </Box>
                <Box w={{ md: "40%" }}>
                  <Text fontSize={{ base: "16px", md: "22px" }}>100ヘクタールの農地やビニールハウスなどがあり、小さなドッグランも併設しております。</Text>
                </Box>
              </Flex>
              <Flex justifyContent="space-around" alignItems="center" flexWrap={{base: "wrap", md: "nowrap"}} my={{ base: 10, md: 20 }} flexDirection={{ md: "row-reverse" }}>
                <Box>
                  <Image src="./images/set-a.jpg" w={{ base: "70vw", sm: "80vw", md: "50vw" }} maxWidth="600px" alt="vegi-set" />
                </Box>
                <Box w={{ md: "40%" }}>
                  <Heading as="h3" fontSize={{ base: "18px", md: "26px" }}>無人販売</Heading>
                  <Text fontSize={{ base: "16px", md: "22px" }}>農園の入り口付近にて無人販売をしております。採れたての新鮮野菜をお買い求め頂けますので、お立ちよりの際はぜひご覧になって下さい。</Text>
                </Box>
              </Flex>
            </Flex>
          </Box>
          <Box id="access" maxWidth="1250px" px="5" py={{ md: 10 }} pt={{ base: 8 }}>
            <SectionTitle mainTitle="アクセス" subTitle="access" />
            <Flex wrap="wrap" justifyContent="center" my={{ md: 20 }}>
              <Image mb={20} src="./images/farm-map.png" alt="map" />
              <Text textAlign="left" fontSize={{ base: "16px", md: "22px" }}>日の出ヶ丘方面からR831を北上し、月光堂郵便局が見えたら突き当たりを左折して下さい。<br />道中、当園の看板が目印としてございます。</Text>
            </Flex>
          </Box>
          <Footer />
        </VStack>
      </Box>
    </ChakraProvider>
  );
}

export default App;
