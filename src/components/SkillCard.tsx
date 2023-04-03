import React from 'react';
import {
  TouchableOpacity,
  Text,
  StyleSheet,
  TouchableOpacityProps,
} from 'react-native';

export interface SkillCardInterface extends TouchableOpacityProps {
  skill: any;
}

export function SkillCard({skill, ...rest}: SkillCardInterface) {
  return (
    <TouchableOpacity style={styles.buttonSkill} {...rest}>
      <Text style={styles.textSkill}>{skill}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  buttonSkill: {
    backgroundColor: '#1f1e25',
    borderRadius: 30,
    alignItems: 'center',
    marginBottom: 20,
  },
  textSkill: {
    color: '#fff',
    backgroundColor: '#1f1e25',
    padding: 10,
    fontSize: 22,
    fontWeight: 'bold',
    borderRadius: 5,
  },
});
