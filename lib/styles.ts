const linkVariants = cva('text-[14px]', {
  variants: {
		variant: {
		  default: 'underline text-muted-foreground',
		  semibold: 'font-semibold text-foreground',
		},
  },
  defaultVariants: {
    variant: 'default',
  },
});

export { linkVariants }
