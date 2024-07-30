// create a dummy app using nativewind

import React from 'react';
import {Text, SafeAreaView, StatusBar, ScrollView} from 'react-native';
import './global.css';

import {
  Container,
  AlertModal,
  ListComponent,
  InputComponent,
  DropdownComponent,
  AutoSuggestComponent,
  TableView,
  ModalComponent,
  Calendar,
} from './rnwebcomponent/src';

export default function App() {
  return (
    <SafeAreaView>
      <ScrollView className="z-1">
        <StatusBar barStyle="dark-content" />

        {/* Calender Components */}
        <Container title="Calender">
          <Calendar />
        </Container>
        {/* Text component */}
        <Container title="Text">
          <Text className="text-24 text-red-300">
            React Native Web App Example
          </Text>
        </Container>

        {/* List */}
        <Container title="List">
          <ListComponent />
        </Container>

        {/* Input field */}
        <Container title="Enter some text">
          <InputComponent />
        </Container>

        {/* Dropdown */}
        <Container title="Dropdown">
          <DropdownComponent />
        </Container>

        {/* Auto suggest */}
        <Container title="Auto Suggest">
          <AutoSuggestComponent />
        </Container>

        {/* Alert Modal */}
        <Container title="Alert Modal">
          <AlertModal />
        </Container>

        <Container title="Modal">
          <ModalComponent />
        </Container>

        <Container title="Table View">
          <TableView />
        </Container>
      </ScrollView>
    </SafeAreaView>
  );
}
