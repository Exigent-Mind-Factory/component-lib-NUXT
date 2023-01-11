<template>
    <section id="tables" class="tables wrapper">
        <!-- Tables -->
        <div class="inner-wrapper">
            <h2>Tables</h2>

            <div class="table">
                <div class="table-header">
                    <span class="title">Field 1</span>
                    <span class="title">Field 2</span>
                    <span class="title">Field 3</span>
                </div>

                <div class="table-row" v-for="row in tableData">
                    <span>{{ row.field1 }}</span>
                    <span>{{ row.field2 }}</span>
                    <span>{{ row.field3 }}</span>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    data() {
        return {
            tableData: [
                { field1: 'Row 1, field 1', field2: 'Row 1, field 2', field3: 'Row 1, field 3' },
                { field1: 'Row 2, field 1', field2: 'Row 2, field 2', field3: 'Row 2, field 3' },
                { field1: 'Row 3, field 1', field2: 'Row 3, field 2', field3: 'Row 3, field 3' },
                { field1: 'Row 4, field 1', field2: 'Row 4, field 2', field3: 'Row 4, field 3' }
            ]
        }
    }
}
</script>

<style lang="scss" scoped>
.table {
    border-radius: 5px;
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.16);
}

.table-header,
.table-row {
    display: grid;
    grid-template-columns: 2fr 1fr 1fr;
    gap: 10px 20px;
    padding: 5px 20px;

    @media (min-width: 768px) {
        grid-template-columns: 4fr 1fr 1fr;
    }
}

.table-header {
    font-size: 1.2rem;
    font-weight: 600;
    background-color: #efefef;
}

.table-row {
    font-size: 14px;
    border-bottom: 1px solid #efefef;
}
</style>