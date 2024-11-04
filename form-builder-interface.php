<?php 
?>
<div class="wrap">
    <h1>Registration Form Builder</h1>
    <div id="crfb-form-builder">
        <div id="crfb-layout">
            <!-- Field Palette -->
            <div id="crfb-field-palette">
                <h2>Available Fields</h2>
                <ul>
                    <li data-type="text"><span class="dashicons dashicons-edit"></span> Text Field</li>
                    <li data-type="number"><span class="dashicons dashicons-format-aside"></span> Number Field</li>
                    <li data-type="textarea"><span class="dashicons dashicons-editor-alignleft"></span> Textarea</li>
                    <li data-type="email"><span class="dashicons dashicons-email"></span> Email</li>
                    <li data-type="select"><span class="dashicons dashicons-arrow-down"></span> Select Box</li>
                    <li data-type="checkbox"><span class="dashicons dashicons-yes"></span> Checkbox</li>
                    <li data-type="radio"><span class="dashicons dashicons-marker"></span> Radio Button</li>
                    <li data-type="password"><span class="dashicons dashicons-lock"></span> Password</li>
                    <li data-type="date"><span class="dashicons dashicons-calendar"></span> Date Picker</li>
                    <li data-type="time"><span class="dashicons dashicons-clock"></span> Time Picker</li>
                    <li data-type="file"><span class="dashicons dashicons-upload"></span> File Upload</li>
                </ul>
            </div>

            <!-- Form Canvas -->
            <div id="crfb-form-canvas">
                <h2>Form Canvas</h2>
                <ul id="crfb-canvas-fields">
                    <li data-type="email" class="crfb-field" data-required="true">
                        <span>Email (cannot be deleted)</span>
                    </li>
                </ul>
                <button id="crfb-save-form" class="button button-primary">Save</button>
                <button id="crfb-reset-form" class="reset-button">Reset</button>
            </div>
        </div>

        <div id="crfb-form-preview">
            <h2>Live Preview</h2>
            <div id="crfb-live-preview"></div>
        </div>
    </div>
</div>
<?php  ?>