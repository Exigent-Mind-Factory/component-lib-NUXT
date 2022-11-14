<template>
    <section id="forms" class="mf-forms wrapper">
        <!-- Forms -->
        <div class="inner-wrapper">
            <h2>Forms</h2>
            <p>Find examples and usage guidlines for form control styles, layout options and custom components for creating a wide range of form inputs.</p>
            <!-- field-group -->
            <div class="form-fields disflex-start">
                <div class="field-group">
                    <label for="userInput">User Input <span>Class ["field-group"]</span></label>
                    <input type="text" name="userInput" placeholder="Placeholder text.." class="input-field">
                </div>
            </div>

            <h4>Width</h4>
            <!-- field-group-2 -->
            <div class="form-fields disflex-space-between-middle">
                <div class="field-group-2">
                    <label for="userInput">User Input <span>Class ["field-group-2"]</span></label>
                    <input type="text" name="userInput" placeholder="Placeholder text.." class="input-field">
                </div>
                <div class="field-group-2">
                    <label for="userInput">User Input <span>Class ["field-group-2"]</span></label>
                    <input type="text" name="userInput" placeholder="Placeholder text.." class="input-field">
                </div>
            </div>
            <!-- field-group-3 -->
            <div class="form-fields disflex-space-between-middle">
                <div class="field-group-3">
                    <label for="userInput">User Input <span>Class ["field-group-3"]</span></label>
                    <input type="text" name="userInput" placeholder="Placeholder text.." class="input-field">
                </div>
                <div class="field-group-3">
                    <label for="userInput">User Input <span>Class ["field-group-3"]</span></label>
                    <input type="text" name="userInput" placeholder="Placeholder text.." class="input-field">
                </div>
                <div class="field-group-3">
                    <label for="userInput">User Input <span>Class ["field-group-3"]</span></label>
                    <input type="text" name="userInput" placeholder="Placeholder text.." class="input-field">
                </div>
            </div>
            <!-- field-group-4 -->
            <div class="form-fields disflex-space-between-middle">
                <div class="field-group-4">
                    <label for="userInput">User Input <span>Class ["field-group-4"]</span></label>
                    <input type="text" name="userInput" placeholder="Placeholder text.." class="input-field">
                </div>
                <div class="field-group-4">
                    <label for="userInput">User Input - <span>Class ["field-group-4"]</span></label>
                    <input type="text" name="userInput" placeholder="Placeholder text.." class="input-field">
                </div>
                <div class="field-group-4">
                    <label for="userInput">User Input - <span>Class ["field-group-4"]</span></label>
                    <input type="text" name="userInput" placeholder="Placeholder text.." class="input-field">
                </div>
                <div class="field-group-4">
                    <label for="userInput">User Input <span>Class ["field-group-4"]</span></label>
                    <input type="text" name="userInput" placeholder="Placeholder text.." class="input-field">
                </div>
            </div>
            <!-- Textarea -->
            <h4>Textarea</h4>
            <div class="field-group">
                <label for="userTextarea">User Textarea <span>Class ["field-group"]</span></label>
                <textarea name="userTextarea" placeholder="Placeholder text.." id="" cols="30" rows="10" class="input-field-textarea"></textarea>
            </div>
        </div>
    </section>
</template>

<style lang="scss">
    section#forms{
        label{
            span{
                font-size: .6rem;
                color: var(--mid-grey);
                position: absolute;
                right: 0;
                top: 0;
            }
        }
    }
</style>