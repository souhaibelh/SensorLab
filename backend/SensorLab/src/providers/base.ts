export interface InputProvider {
    getValue(): Promise<any>;
}