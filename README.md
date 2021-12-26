## Accessible React Modal

`Dialog (Modal)`
A dialog is a window overlaid on either the primary window or another dialog window. Windows under a modal dialog are inert. That is, users cannot interact with content outside an active dialog window. Inert content outside an active dialog is typically visually obscured or dimmed so it is difficult to discern, and in some implementations, attempts to interact with the inert content cause the dialog to close.

Like non-modal dialogs, modal dialogs contain their tab sequence. That is, Tab and Shift + Tab do not move focus outside the dialog. However, unlike most non-modal dialogs, modal dialogs do not provide means for moving keyboard focus outside the dialog window without closing the dialog.

`Keyboard Interaction`
In the following description, the term tabbable element refers to any element with a tabindex value of zero or greater. Note that values greater than 0 are strongly discouraged.
<ul>
    <li>When a dialog opens, focus moves to an element inside the dialog. See notes below regarding initial focus placement.</li>
    <li>`Tab:`
         <li>Moves focus to the next tabbable element inside the dialog.</li>
         <li>If focus is on the last tabbable element inside the dialog, moves focus to the first tabbable element inside the dialog.</li>
    </li>
    <li>`Shift + Tab:`
        <li>Moves focus to the previous tabbable element inside the dialog.</li>
        <li>If focus is on the first tabbable element inside the dialog, moves focus to the last tabbable element inside the dialog.</li>
    </li>
    <li>`Escape:` Closes the dialog.</li>
</ul>

> ### NOTE
> `1.` When a dialog opens, focus placement depends on the nature and size of the content <br>
>   * In all circumstances, focus moves to an element contained in the dialog. <br>
>   * Unless a condition where doing otherwise is advisable, focus is initially set on the first focusable element. <br>
>   * If content is large enough that focusing the first interactive element could cause the beginning of content to scroll out of view, it is advisable to add `tabindex=-1` to a static element at the top of the dialog, such as the dialog title or first paragraph, and initially focus that element. <br>
>   * If a dialog contains the final step in a process that is not easily reversible, such as deleting data or completing a financial transaction, it may be advisable to set focus on the least destructive action, especially if undoing the action is difficult or impossible. The Alert Dialog Pattern is often employed in such circumstances. <br>
>   * If a dialog is limited to interactions that either provide additional information or  continue processing, it may be advisable to set focus to the element that is likely to be most frequently used, such as an `OK or Continue button`. <br>
>
> `2:` When a dialog closes, focus returns to the element that invoked the dialog unless either: <br>
>   * The invoking element no longer exists. Then, focus is set on another element that provides logical work flow.<br>
>   *  The work flow design includes the following conditions that can occasionally make focusing a different element a more logical choice:<br>
>         `1:` It is very unlikely users need to immediately re-invoke the dialog.<br>
>         `2:` The task completed in the dialog is directly related to a subsequent step in the work flow.<br>
> For example, a grid has an associated toolbar with a button for adding rows. the Add Rows <br>button  opens a dialog that prompts for the number of rows. After the dialog closes, focus <br> is placed in  the first cell of the first new row.<br>
>
> `3:` It is strongly recommended that the tab sequence of all dialogs include a visible element <br>with role button that closes the dialog, such as a close icon or cancel button.<br>
>
>>

### `WAI-ARIA Roles, States, and Properties`
<ul>
    <li>The element that serves as the dialog container has a role of <strong>dialog.</strong></li>
    <li>All elements required to operate the dialog are descendants of the element that has role <strong>dialog.</strong></li>
    <li>The dialog container element has <strong>aria-modal</strong> set to <strong>true.</strong></li>
    <li>`The dialog has either:`
        <li>A value set for the <strong>aria-labelledby</strong> property that refers to a visible dialog title.</li>
        <li>A label specified by <strong>aria-label.</strong></li>
    </li>
    <li>Optionally, the <strong>aria-describedby</strong> property is set on the element with the <strong>dialog</strong> role to indicate which element or elements in the dialog contain content that describes the primary purpose or message of the dialog. Specifying descriptive elements enables screen readers to announce the description along with the dialog title and initially focused element when the dialog opens.</li>
</ul>

> ### NOTE
> * Because marking a dialog modal by setting <strong>aria-modal</strong> to <strong>true</strong> can prevent users of some assistive technologies from perceiving content outside the dialog, users of those technologies will experience severe negative ramifications if a dialog is marked modal but does not behave as a modal for other users. So, mark a dialog modal <strong>only when both:</strong><br>
>   1: Application code prevents all users from interacting in any way with content outside of it.<br>
>   2: Visual styling obscures the content outside of it. <br>
> * The <strong>aria-modal</strong> property introduced by ARIA 1.1 replaces <strong>aria-hidden</strong> for informing assistive technologies that content outside a dialog is inert. However, in legacy dialog implementations where <strong>aria-hidden</strong>is used to make content outside a dialog inert for assistive technology users, it is important that:<br>
> 1: <strong>aria-hidden</strong> is set to <strong>true </strong>on each element containing a portion of the inert layer.<br>
> 2: The dialog element is not a descendant of any element that has <strong>aria-hidden</strong> set to <strong>true.</strong>

>>

# Keyboard Support
 <table>
    <thead>
        <tr>
        <th><strong>Key</strong></th>
        <th><strong>Function</strong></th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>Tab</td>
            <td>
                <ul>
                    <li>Moves focus to next focusable element inside the dialog.</li>
                    <li>When focus is on the last focusable element in the dialog,<br> moves focus to the first focusable element in the dialog.</li>
                </ul>
            </td>
        </tr>
        <tr>
            <td>Shift + Tab</td>
            <td>
                <ul>
                    <li>Moves focus to previous focusable element inside the dialog.</li>
                    <li>When focus is on the first focusable element in the dialog,<br> moves focus to the last focusable element in the dialog.</li>
                </ul>
            </td>
        </tr>
        <tr>
            <td>Escape</td>
            <td>Closes the dialog.</td>
        </tr>
    </tbody>
</table>

# Role, Property, State, and Tabindex Attributes
<table>
    <thead>
        <tr>
            <th><strong>Role</strong></th>
            <th><strong>Attribute</strong></th>
            <th><strong>Element</strong></th>
            <th><strong>Usage</strong></th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>dialog</td>
            <td></td>
            <td>div</td>
            <td>Identifies the element that serves as the dialog container.</td>
        </tr>
        <tr>
            <td></td>
            <td>aria-labelledby="IDREF"</td>
            <td>div</td>
            <td>Gives the dialog an accessible name by referring to the element that provides the dialog title.</td>
        </tr>
        <tr>
            <td></td>
            <td>aria-labelledby="IDREF"</td>
            <td>div</td>
            <td>
            <ul>
                <li>Gives the dialog an accessible description by <br> referring to the dialog content that describes the <br> primary message or purpose of the dialog.<br></li>
                <li>Used in three of the four dialogs included in the example.<br> See the above accessibility features section for an explanation.</li>
            </ul>
            </td>
        </tr>
        <tr>
                <td></td>
                <td>aria-modal="true"</td>
                <td>div</td>
                <td>Tells assistive technologies that the windows underneath the <br>current dialog are not available for interaction (inert).</td>
            </tr>
    </tbody>
</table>



# Getting Started with Create React App
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
