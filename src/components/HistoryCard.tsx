import { Heading, HStack, VStack, Text } from "native-base";

export function HistoryCard() {
    return (
        <HStack>
            <VStack>
                <Heading>
                    Costas
                </Heading>

                <Text>
                    Puxada frontal
                </Text>
                
                <Text>
                    08:56
                </Text>
            </VStack>
        </HStack>
    );
}