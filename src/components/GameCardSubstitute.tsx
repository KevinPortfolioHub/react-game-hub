import { Card, CardBody, Skeleton, SkeletonText } from "@chakra-ui/react";

const GameCardSubstitute = () => {
  return (
    <Card>
      <Skeleton height="200px"></Skeleton>
      <CardBody>
        <SkeletonText></SkeletonText>
      </CardBody>
    </Card>
  );
};

export default GameCardSubstitute;
