# Special Files
<ul>
    <li>page.tsx</li>
    <li>not-found.tsx</li>
    <li>layout.tsx</li>
    <li>template.tsx</li>
    <li>loading.tsx</li>
    <li>error.tsx</li>
    <li>default.tsx</li> <!--This file acts as a fallback for the "slot" means paralell routes when you refresh the browser, if default.tsx is not present, the ui will go to not-found.tsx-->
</ul>


# Parallel Routes usage (Same as multiple components)
## Each slot of your layout, such as user analytics or revenue metrics, can have its own loading and error states.

## This granular control is particularly beneficial in scenarios where different sections of the page load at varying speeds or encounter unique errors


# Advance Routing Patterns

<ul>
    <li>Parallel routes</li>
    <li>Intercepting routes</li> <!-- Intercepting routes allows you to intercept or stop the default routing behavior to present an alternate view or component when navigating through the UI, while still preserving the intended route for scenarios like page reloads.-->
</ul>