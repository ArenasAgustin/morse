# Tailwind CSS Version Decision

## Why We Stay on v3.x

This project uses **Tailwind CSS v3.x** instead of upgrading to v4.x for the following reasons:

### 1. Architecture Changes in v4
Tailwind CSS v4 introduced major breaking changes:
- The PostCSS plugin was moved to a separate package (`@tailwindcss/postcss`)
- Configuration format changed significantly
- Requires manual PostCSS configuration setup

### 2. Create React App Compatibility
This project uses Create React App (react-scripts v5.0.1), which:
- Has built-in PostCSS configuration that works seamlessly with Tailwind v3
- Cannot be easily configured without ejecting or using CRACO
- The integrated setup with v3 works perfectly out of the box

### 3. Migration Effort vs. Benefits
Upgrading to v4 would require:
- Installing `@tailwindcss/postcss` package
- Configuring PostCSS manually (requiring ejecting or CRACO)
- Potentially rewriting CSS code due to API changes
- Testing all components for compatibility

The benefits of v4 don't justify this migration effort for this project at this time.

## Current Setup
- **Tailwind CSS Version**: ^3.4.18 (latest v3.x)
- **Configuration**: `tailwind.config.js` (v3 format)
- **Integration**: Built-in via react-scripts PostCSS

## Future Considerations
When considering upgrading to v4:
1. Evaluate if migrating away from Create React App (e.g., to Vite)
2. Review the official Tailwind v4 migration guide
3. Test thoroughly in a separate branch
4. Consider the maintenance burden of the new setup
