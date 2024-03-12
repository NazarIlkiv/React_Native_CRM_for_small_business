import { View } from "react-native";
import React, { useState, useEffect } from "react";
import { useAuth } from "@/context/authContext";
import { heightPercentageToDP as hp } from "react-native-responsive-screen";
import { StatusBar } from "expo-status-bar";
import ChatList from "@/components/Chat/ChatList";
import Loading from "@/components/custom/Loading";
import { query, where, getDocs } from "firebase/firestore";
import { usersRef } from "@/firebaseConfig";

const Home = () => {
  const { logout, user } = useAuth();
  const [users, setUsers] = useState([]);

  useEffect(() => {
    if (user?.uid) getUsers();
  }, []);

  const getUsers = async () => {
    // fetch users

    const q = query(usersRef, where("userId", "!=", user?.uid));

    const querySnapshot = await getDocs(q);

    let data = [];
    querySnapshot.forEach((doc) => {
      data.push({ ...doc.data() });
    });

    setUsers(data);
  };

  return (
    <View className="flex-1 bg-white ">
      <StatusBar style="light" />
      {users.length > 0 ? (
        <ChatList currentUser={user} users={users} />
      ) : (
        <View className="flex items-center" style={{ top: hp(30) }}>
          <Loading size={hp(10)} />
        </View>
      )}
    </View>
  );
};

export default Home;
