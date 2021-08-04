import React, {useState, useRef} from 'react';
import { StyleSheet, TextInput, Button, View } from 'react-native';

export default function AddTodo({submitHandler}) {
    const input = useRef()
    const [text, setText] = useState('')

    const changeHandler = (val) => {
        setText(val)
    }
    return (
        <View>
            <TextInput
                ref={input}
                style={styles.input}
                placeholder="Add todo..."
                value={text}
                autoCapitalize="none"
                onChangeText={changeHandler}
            />
            <Button onPress={() => {input.current.blur(); submitHandler(text); setText("")}} title="add todo" color='coral' />
        </View>
    )
}

const styles = StyleSheet.create({
    input: {
        marginBottom: 10,
        paddingHorizontal: 8,
        paddingVertical: 6,
        borderBottomWidth: 1,
        borderBottomColor: '#ddd'
    }
})