declare module 'PDP/*';
declare module 'PLP/*';
declare module 'SUPPORT/*';
declare module 'BASKET/*';
declare module 'SHELL/Store' {
    const useGlobalStore: Create;
    const createStore: Create;
}


type Create = {
    <T, Mos extends [StoreMutatorIdentifier, unknown][] = []>(initializer: StateCreator<T, [], Mos>): UseBoundStore<Mutate<StoreApi<T>, Mos>>;
    <T>(): <Mos extends [StoreMutatorIdentifier, unknown][] = []>(initializer: StateCreator<T, [], Mos>) => UseBoundStore<Mutate<StoreApi<T>, Mos>>;
    /**
     * @deprecated Use `useStore` hook to bind store
     */
    <S extends StoreApi<unknown>>(store: S): UseBoundStore<S>;
};

interface IGlobalState {
    state: { [key: string]: unknown };
    update: (newState: { [key: string]: unknown }) => void;
    delete: (key: string) => void;
    deleteAll: () => void
}
