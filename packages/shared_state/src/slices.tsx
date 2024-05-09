import getHookAndProviderFromSlices from 'react-context-slices';

export const { useSlice, Provider } = getHookAndProviderFromSlices({
  slices: {
    cart: { initialArg: [] },
  },
});
