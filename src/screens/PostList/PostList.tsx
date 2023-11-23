import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet, ImageBackground } from 'react-native';
import { SwipeListView } from 'react-native-swipe-list-view';
import { fetchPosts, deletePost  } from '../../store/api/postsApi';
import { styles } from './PostListStyles';
import { useSelector } from 'react-redux';
import { selectLoggedInAs } from '../../store/slices/authSlice';


const PostList = () => {
    const [posts, setPosts] = useState([]);
    const loggedInUser = useSelector(selectLoggedInAs);

    useEffect(() => {
      const unsubscribe = fetchPosts(setPosts, loggedInUser);
      return () => unsubscribe();
    }, [loggedInUser]);

    const handleDelete = async (postId) => {
        await deletePost(postId);
        setPosts((prevPosts) => prevPosts.filter((post) => post.id !== postId));
      };

      const renderHiddenItem = (data, rowMap) => {
        if (data.item.createdBy === loggedInUser) {
          return (
            <View style={styles.rowBack}>
              <TouchableOpacity
                style={[styles.backRightBtn, styles.backRightBtnRight]}
                onPress={() => handleDelete(data.item.id)}
              >
                <Text style={styles.backTextWhite}>Delete</Text>
              </TouchableOpacity>
            </View>
          );
        }

        return <View />;
      };

      return (
        <ImageBackground
        source={require('../../../image/background.jpg')}
        style={styles.backgroundImage}>
        <View style={styles.container}>
          <SwipeListView
            data={posts}
            keyExtractor={(item) => item.id}
            renderItem={(data, rowMap) => (
              <View style={styles.postContainer}>
                <Text style={styles.postText}>{data.item.text}</Text>
                <Text style={styles.authorText}>Created by: {data.item.createdBy}</Text>
                <Text style={styles.dateText}>On: {data.item.createdDate}</Text>
              </View>
            )}
            renderHiddenItem={renderHiddenItem}
            rightOpenValue={-105}
            previewRowKey={'0'}
            previewOpenValue={-40}
            previewOpenDelay={3000}
          />
        </View>
        </ImageBackground>
      );
    };

    export default PostList;
