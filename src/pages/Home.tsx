import React, {useState} from 'react';
import {
  Text,
  StyleSheet,
  View,
  TextInput,
  Platform,
  FlatList,
} from 'react-native';
import {Button} from '../components/Button';
import {SkillCard} from '../components/SkillCard';

interface SkillInterface {
  id: string;
  name: string;
}

export function Home() {
  const [newSkill, setNewSkill] = useState<string>('');
  const [mySkills, setMySkills] = useState<Map<string, SkillInterface>>(
    new Map([]),
  );

  function handleAddNewSkill() {
    const data: SkillInterface = {
      id: String(new Date().getTime()),
      name: newSkill,
    };

    setMySkills(oldState => new Map(oldState.set(data.id, data)));
  }

  function handleRemoveSkill(id: string) {
    setMySkills(oldState => {
      oldState.delete(id);
      return new Map(oldState);
    });
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome, Wagner</Text>
      <TextInput
        style={styles.input}
        placeholder="New skill"
        placeholderTextColor="#555"
        onChangeText={setNewSkill}
      />

      <Button onPress={handleAddNewSkill} title="Add" />

      <Text style={[styles.title, {marginVertical: 30}]}>MySkill</Text>
      <FlatList
        data={[...mySkills.values()]}
        keyExtractor={item => item.id}
        renderItem={({item}) => (
          <SkillCard
            skill={item.name}
            onPress={() => handleRemoveSkill(item.id)}
          />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121015',
    paddingHorizontal: 20,
    paddingVertical: 20,
  },
  title: {color: '#fff', fontSize: 24, fontWeight: 'bold'},
  input: {
    backgroundColor: '#1F1E25',
    color: '#fff',
    fontSize: 18,
    padding: Platform.OS == 'ios' ? 15 : 10,
    marginTop: 30,
    borderRadius: 7,
  },
});
