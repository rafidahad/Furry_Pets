// Feed.jsx
import React from 'react';
import { Box, Card, CardHeader, CardContent, Typography, Avatar } from '@mui/material';

const Feed = () => {
  const posts = [
    {
      id: 1,
      author: 'John Doe',
      avatar: '',
      title: 'My dog just had puppies!',
      content: 'Look at these cute puppies I have at home!',
    },
    {
      id: 2,
      author: 'Jane Smith',
      avatar: '',
      title: 'Lost my cat in the neighborhood',
      content: 'Any suggestions on how to find her?',
    },
  ];

  return (
    <Box sx={{ width: '100%', maxWidth: '640px', mx: 'auto', mt: 2 }}>
      {posts.map((post) => (
        <Card key={post.id} sx={{ mb: 2 }}>
          <CardHeader
            avatar={<Avatar src={post.avatar} alt={post.author} />}
            title={post.title}
            subheader={`Posted by ${post.author}`}
          />
          <CardContent>
            <Typography variant="body1">{post.content}</Typography>
          </CardContent>
        </Card>
      ))}
    </Box>
  );
};

export default Feed;
