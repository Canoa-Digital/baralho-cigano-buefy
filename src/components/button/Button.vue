<template>
    <component
        :is="computedTag"
        class="bulma-button"
        v-bind="$attrs"
        :type="nativeType"
        :class="[size, type, {
            'bulma-is-rounded': rounded,
            'bulma-is-loading': loading,
            'bulma-is-outlined': outlined,
            'bulma-is-fullwidth': expanded,
            'bulma-is-inverted': inverted,
            'bulma-is-focused': focused,
            'bulma-is-active': active,
            'bulma-is-hovered': hovered,
            'bulma-is-selected': selected
        }]"
        v-on="$listeners"
    >
        <b-icon
            v-if="iconLeft"
            :pack="iconPack"
            :icon="iconLeft"
            :size="iconSize"
        />
        <span v-if="label">{{ label }}</span>
        <span v-else-if="$slots.default">
            <slot />
        </span>
        <b-icon
            v-if="iconRight"
            :pack="iconPack"
            :icon="iconRight"
            :size="iconSize"
        />
    </component>
</template>

<script>
import Icon from '../icon/Icon'
import config from '../../utils/config'

export default {
    name: 'BButton',
    components: {
        [Icon.name]: Icon
    },
    inheritAttrs: false,
    props: {
        type: [String, Object],
        size: String,
        label: String,
        iconPack: String,
        iconLeft: String,
        iconRight: String,
        rounded: {
            type: Boolean,
            default: () => {
                return config.defaultButtonRounded
            }
        },
        loading: Boolean,
        outlined: Boolean,
        expanded: Boolean,
        inverted: Boolean,
        focused: Boolean,
        active: Boolean,
        hovered: Boolean,
        selected: Boolean,
        nativeType: {
            type: String,
            default: 'button',
            validator: (value) => {
                return [
                    'button',
                    'submit',
                    'reset'
                ].indexOf(value) >= 0
            }
        },
        tag: {
            type: String,
            default: 'button',
            validator: (value) => {
                return config.defaultLinkTags.indexOf(value) >= 0
            }
        }
    },
    computed: {
        computedTag() {
            if (this.$attrs.disabled !== undefined && this.$attrs.disabled !== false) {
                return 'button'
            }
            return this.tag
        },
        iconSize() {
            if (!this.size || this.size === 'bulma-is-medium') {
                return 'bulma-is-small'
            } else if (this.size === 'bulma-is-large') {
                return 'bulma-is-medium'
            }
            return this.size
        }
    }
}
</script>
