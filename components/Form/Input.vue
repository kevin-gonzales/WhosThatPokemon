<template>
    <div>
        <label :for="inputId">{{ label }}</label>
        <input :type="type" :id="inputId" v-model="inputValue">
        <button @click="submitForm">Valider</button>

    </div>
</template>

<script>
export default {
    name: 'FormInput',
    props: {
        label: {
            type: String,
            required: true
        },
        type: {
            type: String, 
            required: true,
            default: 'text'
        },
        inputId: {
            type: Number,
            required: true
        }
    },

    data() {
        return {
            inputValue: ''
        }
    },

    methods: {
        submitForm() {
            this.$emit('form-submit', this.inputValue)
        }
    },
    emits: ['form-submit']
}
</script>