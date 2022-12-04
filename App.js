import {
   StyleSheet,
   View,
   FlatList,
   Modal,
   Button
} from 'react-native';
import { useState } from 'react';
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';
import { StatusBar } from 'expo-status-bar';

export default function App() {
   const [courseGoals, setCourseGoals] = useState([]);
   const [modalIsVisible, setModalIsVisible] = useState(false);

   function startAddGoalHandler() {
      setModalIsVisible(true);
   }

   function endAddGoalHandler() {
      setModalIsVisible(false);
   }

   function addGoalHandler(enteredGoalText) {
      setCourseGoals((currentCourseGoals) => [
         ...currentCourseGoals,
         { text: enteredGoalText, id: Math.random().toString() },
      ]);

      endAddGoalHandler();
   }

   function deleteGoalHandler(id){
      setCourseGoals((currentCourseGoals) => {
         return currentCourseGoals.filter((goal) => goal.id !==id );
      });
   }

   return (
      <>
      <StatusBar style='dark' />
      <View style={styles.appContainer}>
         <View style={styles.button}>
         <Button title='Add New Goal' color="#0284d4" 
         onPress={startAddGoalHandler} />
         </View>
         <GoalInput visible={modalIsVisible} 
         onAddGoal={addGoalHandler}
         onCancel={endAddGoalHandler}/>
         <View style={styles.goalsContainer}>
            <FlatList
               data={courseGoals}
               renderItem={(itemData) => {
                  return (
                     <GoalItem text={itemData.item.text} 
                        id = {itemData.item.id}
                        onDeleteItem = {deleteGoalHandler}
                     />
                  );
               }}
               keyExtractor={(item, index) =>{
                  return item.id;
               }}
            />
         </View>
      </View>
      </>
   );
}

const styles = StyleSheet.create({
   appContainer: {
      flex: 1,
      padding: 40,
      paddingHorizontal: 16,
   },
 
   goalsContainer: {
      flex: 5,
      paddingTop:20,
   },
   goalItem: {
      margin: 8,
      padding: 8,
      borderRadius: 6,
      backgroundColor: '#5e0acc',
      color: 'white',
   },
   goalText: {
      color: 'white',
   },
   button:{
      marginTop:45,
   }
});
