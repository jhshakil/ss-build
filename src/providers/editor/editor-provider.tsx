import { EditorBtns } from "@/lib/constants";
import { EditorAction } from "./editor-actions";

export type DeviceTypes = "Desktop" | "Mobile" | "Tablet";

export type EditorElement = {
  id: string;
  styles: React.CSSProperties;
  name: string;
  type: EditorBtns;
  content: EditorElement[] | {};
};

export type Editor = {
  liveMode: boolean;
  elements: EditorElement[];
  selectedElement: EditorElement;
  device: DeviceTypes;
  previewMode: boolean;
  funnelPageId: string;
};

export type HistoryState = {
  history: Editor[];
  currentIndex: number;
};

export type EditorState = {
  editor: Editor;
  history: HistoryState;
};

const initialEditorState: EditorState["editor"] = {
  elements: [
    {
      content: [],
      id: "__body",
      name: "Body",
      styles: {},
      type: "__body",
    },
  ],
  selectedElement: {
    id: "",
    content: [],
    name: "",
    styles: {},
    type: null,
  },
  device: "Desktop",
  previewMode: false,
  liveMode: false,
  funnelPageId: "",
};

const initialHistoryState: HistoryState = {
  history: [initialEditorState],
  currentIndex: 0,
};

const initialState: EditorState = {
  editor: initialEditorState,
  history: initialHistoryState,
};

const editorReducer = (
  state: EditorState = initialState,
  action: EditorAction
): EditorState => {
  switch (action.type) {
    case "ADD_ELEMENT":
    case "UPDATE_ELEMENT":
    case "DELETE_ELEMENT":
    case "CHANGE_CLICKED_ELEMENT":
    case "CHANGE_DEVICE":
    case "TOGGLE_PREVIEW_MODE":
    case "TOGGLE_LIVE_MODE":
    case "REDO":
    case "UNDO":
    case "LOAD_DATA":
    case "SET_FUNNELPAGE_ID":
    default:
      return state;
  }
};
