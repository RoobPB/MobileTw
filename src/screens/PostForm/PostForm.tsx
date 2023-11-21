import React, { useState } from 'react';
import { View, TextInput, Button, Text } from 'react-native';
import { addPost } from '../../store/api/postsApi'; // Anpassa sökvägen till din postsApi.ts
import { useDispatch, useSelector } from 'react-redux';
import { selectLoggedInAs } from '../../store/slices/authSlice';

const PostForm = () => {
    const [postText, setPostText] = useState('');
    const loggedInUser = useSelector(selectLoggedInAs); // Hämta inloggad användares namn

    const handleSubmit = async () => {
      if (loggedInUser) {
        try {
          await addPost({
            text: postText,
            createdBy: loggedInUser, // Använd inloggad användares namn
            createdDate: new Date().toLocaleDateString(),
          });
          setPostText('');
        } catch (error) {
          console.error('Error creating post:', error);
        }
      }
    };

  return (
    <View>
      <Text>Create a New Post</Text>
      <TextInput
        value={postText}
        onChangeText={setPostText}
        placeholder="Post text"
      />
      <Button
        onPress={handleSubmit}
        title="Create Post"
        
      />
    </View>
  );
};

export default PostForm;
