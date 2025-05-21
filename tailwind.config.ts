
import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				},
				solar: {
					yellow: "#FFC107",
					"yellow-light": "#FFD54F",
					blue: "#4bafdb",
					"blue-light": "#64B5F6",
					"dark-blue": "#1a3c4d",
					"medium-blue": "#2b5d73"
				}
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				},
				'float': {
					'0%, 100%': { transform: 'translateY(0)' },
					'50%': { transform: 'translateY(-10px)' },
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'float': 'float 3s ease-in-out infinite'
			},
			backgroundImage: {
				'hero-pattern': "url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTQ0MCIgaGVpZ2h0PSI2ODAiIHZpZXdCb3g9IjAgMCAxNDQwIDY4MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBvcGFjaXR5PSIwLjA4IiBkPSJNMTQwMy41NyAyODIuMTI2QzE0NDEuOTQgMzA0LjM4OSAxNDQxLjQ1IDM2MS42ODUgMTQwMi40MiAzODMuMDIyTDI3Mi4xMjkgMTAzOC44OEMyMzMuMDk0IDEwNjAuMjIgMTgyLjM3MyAxMDM0LjA4IDE0NC4wMDQgMTAxMS44MkMxMDUuNjM0IDk4OS41NTIgMTA2LjEyMSA5MzIuMjU2IDE0NS4xNTYgOTEwLjkxOUwxMjc1LjQ1IDI1NS4wNjRDMTMxNC40OCAyMzMuNzI4IDEzNjUuMjEgMjU5Ljg2MyAxNDAzLjU3IDI4Mi4xMjZaIiBmaWxsPSJ1cmwoI3BhaW50MF9saW5lYXJfODQ5XzI4NzM5KSIvPjxkZWZzPjxsaW5lYXJHcmFkaWVudCBpZD0icGFpbnQwX2xpbmVhcl84NDlfMjg3MzkiIHgxPSI5MzQuODE5IiB5MT0iMTY1LjM3MiIgeDI9IjcwNC44MTkiIHkyPSI5NzMuMzcyIiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHN0b3Agc3RvcC1jb2xvcj0iI0ZGQzEwNyIvPjxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iIzY0QjVGNiIgc3RvcC1vcGFjaXR5PSIwLjQ1Ii8+PC9saW5lYXJHcmFkaWVudD48L2RlZnM+PC9zdmc+Cg==')"
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
