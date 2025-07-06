import { Tabs } from "expo-router";
import React from "react";
import {Fontisto as Icon, Ionicons } from "@expo/vector-icons";
export default function Layout() {
    return (
      <Tabs>
        <Tabs.Screen
          name="index"
          options={{
            title: "Home",
            tabBarIcon: ({ color, size }) => <Icon name="home" />,
          }}
        />
        <Tabs.Screen
          name="AddUser"
          options={{
            title: "Add User",
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="add-circle-outline" size={24} color="black" />
            ),
          }}
        />
        <Tabs.Screen
          name="settings"
          options={{
            title: "Profile",
            tabBarIcon: ({ color, size }) => <Icon name="key" />,
          }}
        />
      </Tabs>
    );
}