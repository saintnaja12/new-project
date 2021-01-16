<template>
    <div>
        <b-form-group v-if="selected == `Date`" label="Date:" label-cols="sm-2" label-align="left">
            <b-form-datepicker id="date" v-model="date" class="mb-2" required data-date-language="th"
                :date-format-options="{ year: 'numeric', month: 'numeric', day: 'numeric' }"
                :hide-header="false">
            </b-form-datepicker>
        </b-form-group>

        <b-form-group v-else label-cols="sm-2" label-align="left">
            <b-row>
                <b-col cols="sm-6">
                    <b-form-group label="Date range start:" label-align="left">
                        <b-form-datepicker id="dateStart" v-model="dateStart" class="mb-2" required
                            :date-format-options="{ year: 'numeric', month: 'numeric', day: 'numeric' }"
                            :hide-header="false"
                            >
                        </b-form-datepicker>
                    </b-form-group>
                </b-col>
                <b-col cols="sm-6">
                    <b-form-group label="Date range end:" label-align="left">
                        <b-form-datepicker id="dateEnd" v-model="dateEnd" class="mb-2" required
                            :date-format-options="{ year: 'numeric', month: 'numeric', day: 'numeric' }"
                            :hide-header="false"
                            :min="dateStart">
                        </b-form-datepicker>
                    </b-form-group>
                </b-col>
            </b-row>
        </b-form-group>
    </div>
</template>

<script>
export default {
    name: 'Date',
    data(){
        return {
            date: '',
            dateStart: '',
            dateEnd: '',
        }
    }
}
</script>

<style>

</style>