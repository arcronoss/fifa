// Report.js
import React from 'react';
import { Document, Page, Text, View, StyleSheet, Font } from '@react-pdf/renderer';

// Register a font
Font.register({
  family: 'Roboto',
  src: 'https://fonts.gstatic.com/s/roboto/v20/KFOmCnqEu92Fr1Me5WZLCzYlKw.ttf'
});

// Styles for the report
const styles = StyleSheet.create({
  page: {
    flexDirection: 'column',
    padding: 20,
  },
  section: {
    margin: 10,
    padding: 10,
    fontSize: 12,
    fontFamily: 'Roboto',
  },
  title: {
    fontSize: 18,
    textAlign: 'center',
    marginBottom: 20,
    fontFamily: 'Roboto',
  },
});

// Component to generate the user report PDF
const Report = ({ users }) => (
  <Document>
    <Page style={styles.page}>
      <Text style={styles.title}>User Report</Text>
      {users.length > 0 ? (
        users.map((user) => (
          <View key={user.customer_id} style={styles.section}>
            <Text>Name: {user.customer_name}</Text>
            <Text>Email: {user.customer_email}</Text>
            <Text>Citizen ID: {user.customer_citizen_id}</Text>
          </View>
        ))
      ) : (
        <Text>No user data available</Text>
      )}
    </Page>
  </Document>
);

export default Report;
