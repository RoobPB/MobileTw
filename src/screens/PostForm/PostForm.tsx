import React, { useState } from 'react';
import { View, TextInput, Text, TouchableOpacity, ImageBackground } from 'react-native';
import { addPost } from '../../store/api/postsApi';
import { useSelector } from 'react-redux';
import { selectLoggedInAs } from '../../store/slices/authSlice';
import { Checkbox } from 'react-native-paper';
import { styles } from './PostFormStyles';



const PostForm = () => {
    const [postText, setPostText] = useState('');
    const [isPrivate, setIsPrivate] = useState(false);
    const loggedInUserId = useSelector(selectLoggedInAs);

    const handleSubmit = async () => {
      if (loggedInUserId) {
        try {
          await addPost({
            text: postText,
            createdBy: loggedInUserId,
            createdDate: new Date().toLocaleString(),
            private: isPrivate,
          }, loggedInUserId);
          
          setPostText('');
          setIsPrivate(false);
        } catch (error) {
          console.error('Error creating post:', error);
        }
      }
    };

    return (
        <ImageBackground
        source={require('../../../image/purple.jpg')}
        style={styles.backgroundImage}>
        <View style={styles.container}>
          <Text style={styles.title}>Create a New Post</Text>
          <TextInput
            style={styles.input}
            value={postText}
            onChangeText={setPostText}
            placeholder="Post text"
            placeholderTextColor="white"
          />
          <TouchableOpacity style={styles.button} onPress={handleSubmit}>
              <Text style={styles.buttonText}>Create Post</Text>
            </TouchableOpacity>
            <View style={styles.checkboxWrapper}>
                    <TouchableOpacity
                        style={styles.checkboxContainer}
                        onPress={() => setIsPrivate(!isPrivate)}
                    >
                        <Checkbox
                            status={isPrivate ? 'checked' : 'unchecked'}
                            onPress={() => setIsPrivate(!isPrivate)}
                            color="red"
                        />
                        <Text style={styles.checkboxLabel}>Make post private</Text>
                    </TouchableOpacity>
                </View>
        </View>
        </ImageBackground>
      );
  };

  export default PostForm;
