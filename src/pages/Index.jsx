import { Box, Flex, Heading, Image, IconButton, Text, Stack, Input, Button, useToast, Badge, useColorModeValue } from "@chakra-ui/react";
import { FaHeart, FaRegCommentDots, FaStar, FaUpload } from "react-icons/fa";

const Index = () => {
  const toast = useToast();

  // Dummy data for the gallery
  const galleryItems = [
    {
      id: 1,
      title: "Aurora Borealis",
      technology: "VR Painting",
      imageUrl: "https://images.unsplash.com/photo-1483086431886-3590a88317fe?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxhdXJvcmElMjBib3JlYWxpcyUyMGFydHxlbnwwfHx8fDE3MDkyNTAwNjN8MA&ixlib=rb-4.0.3&q=80&w=1080",
      rating: 4.5,
      comments: [
        { id: 1, text: "Stunning use of colors!" },
        { id: 2, text: "Really captures the essence of the northern lights." },
      ],
    },
    // Add more items as needed
  ];

  const handleCommentSubmit = () => {
    toast({
      title: "Comment added.",
      description: "We've added your comment to the post.",
      status: "success",
      duration: 3000,
      isClosable: true,
    });
  };

  const handleRating = () => {
    toast({
      title: "Rating submitted.",
      description: "Thank you for rating this piece.",
      status: "success",
      duration: 3000,
      isClosable: true,
    });
  };

  return (
    <Box p={5}>
      <Heading mb={6} textAlign="center">
        Art of Technology Community Gallery
      </Heading>
      <Flex wrap="wrap" justifyContent="center" gap={6}>
        {galleryItems.map((item) => (
          <Box key={item.id} maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden" bg={useColorModeValue("white", "gray.800")}>
            <Image src={item.imageUrl} alt={item.title} />

            <Box p="6">
              <Box display="flex" alignItems="baseline">
                <Badge borderRadius="full" px="2" colorScheme="teal">
                  {item.technology}
                </Badge>
                <Box color="gray.500" fontWeight="semibold" letterSpacing="wide" fontSize="xs" textTransform="uppercase" ml="2">
                  {item.comments.length} comments &bull; {item.rating} <FaStar />
                </Box>
              </Box>

              <Flex mt="1" justifyContent="space-between" alignContent="center">
                <Heading fontSize="xl" fontWeight="semibold" as="h4">
                  {item.title}
                </Heading>
                <IconButton aria-label="Add to favorites" icon={<FaHeart />} />
              </Flex>

              <Flex mt={4} alignItems="center" justifyContent="space-between">
                <Stack spacing={4} direction="row">
                  <Button leftIcon={<FaRegCommentDots />} onClick={handleCommentSubmit}>
                    Comment
                  </Button>
                  {[...Array(6)].map((_, index) => (
                    <IconButton key={index} aria-label={`Rate ${index + 1}`} icon={<FaStar />} onClick={() => handleRating(index + 1)} />
                  ))}
                </Stack>
              </Flex>
            </Box>
          </Box>
        ))}
      </Flex>
      <Box mt={6}>
        <Heading size="md">Leave a Comment</Heading>
        <Flex mt={4}>
          <Input placeholder="Write a comment..." />
          <Button ml={2} colorScheme="blue" onClick={handleCommentSubmit}>
            Submit
          </Button>
        </Flex>
      </Box>
    </Box>
  );
};

export default Index;
