import NoteReducer from '../../reducers/noteReducer';
import {
    mainState
} from '../fixtures/mainState';

test("should add a note", () => {
    const result = NoteReducer([], {
        type: "Add",
        ...mainState[0]
    });
    expect(result).toEqual([mainState[0]])
})

test("should delete a note from state", () => {
    const result = NoteReducer(mainState, {
        type: "Delete",
        id: 1
    });
    expect(result).toEqual([mainState[1], mainState[2]])
})

test("should refresh state", () => {
    const result = NoteReducer([], {
        type: "Refresh",
        notes: mainState
    });
    expect(result).toEqual(mainState)
})