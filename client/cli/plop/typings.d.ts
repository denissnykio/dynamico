interface Prompt {
  type: string;
  name: string;
  default?: string;
  message?: string;
  validate?: Validator;
  choices?: any;
}

interface Action {
  type: string;
  path: string;
  templateFile: string;
}

interface Validator {
  (text: string): boolean | string;
}

interface Generator {
  description: string;
  prompts: Prompt[];
  actions: Action[] | any;
}

interface Helper {
  (name: string, ...args): string;
}

export interface Plop {
  addHelper(name: string, helper: Helper): void;
  setGenerator(name: string, generator: Generator): void;
}
