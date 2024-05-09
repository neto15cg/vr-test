import getHookAndProvider from 'react-context-slices';

export const { useSlice, Provider } = getHookAndProvider({
  slices: {
    cart: { initialArg: 0 },
  },
});
