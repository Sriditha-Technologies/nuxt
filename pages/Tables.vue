<template>
     <div>
            <div>
                <h1>Authors Table</h1>
                <ejs-treegrid :dataSource="data1" :treeColumns="['name']" :allowPaging="true">
                    <e-columns>
                        <e-column field="Author" headerText="AUTHOR" width="100"></e-column>
                        <e-column field="Function" headerText="FUNCTION" width="150"></e-column>
                        <e-column field="Status" headerText="STATUS" width="150"></e-column>
                        <e-column field="Employed" headerText="EMPLOYED" width="150"></e-column>
                    </e-columns>
                </ejs-treegrid>
            </div>
            <div>
                <h2>Projects Table</h2>
                <ejs-treegrid :dataSource="data2" :treeColumns="['name']" :allowPaging="true">
                    <e-columns>
                        <e-column field="Companies" :headerTemplate="'iconTemplate'" width="100"></e-column>
                        <e-column field="Members" headerText="MEMBERS" :headerTemplate="'iconTemplate'" width="150"></e-column>
                        <e-column field="Budget" headerText="BUDGET" width="150"></e-column>
                        <e-column field="Completion" headerText="COMPLETION" width="150"></e-column>
                    </e-columns>
                    <template v-slot:membersTemplate="{data}">
                        <img: src="'https://ej2.syncfusion.com/vue/demos/source/tree-grid/images/'+ data.FullName + '.png'" alt="data.FullName"/>
                    </template>
                    <template v-slot:iconTemplate1>
                        <div>
                            <span class="e-icons e-xd e-font-icon" style="font-size: 15px;"></span>
                            <span class="companies" style="padding-left:10px;">Material XD Version</span>
                        </div>
                    </template>
                    <template v-slot:iconTemplate2>
                        <div>
                            <span class="e-icons e-progress e-font-icon" style="font-size: 15px;"></span>
                            <span class="companies" style="padding-left:10px;">Add Progress Track</span>
                        </div>
                    </template>
                    <template v-slot:iconTemplate3>
                        <div>
                            <span class="e-icons e-error e-font-icon" style="font-size: 15px;"></span>
                            <span class="companies" style="padding-left:10px;">Fix Platform Errors</span>
                        </div>
                    </template>
                    <template v-slot:iconTemplate4>
                        <div>
                            <span class="e-icons e-signal e-font-icon" style="font-size: 15px;"></span>
                            <span class="companies" style="padding-left:10px;">Launch Our Mobile App</span>
                        </div>
                    </template>
                    <template v-slot:iconTemplate5>
                        <div>
                            <span class="e-icons e-price e-font-icon" style="font-size: 15px;"></span>
                            <span class="companies" style="padding-left:10px;">Add the New Pricing Page</span>
                        </div>
                    </template>
                    <template v-slot:iconTemplate6>
                        <div>
                            <span class="e-icons e-in e-font-icon" style="font-size: 15px;"></span>
                            <span class="companies" style="padding-left:10px;">Redesign New Online Shop</span>
                        </div>
                    </template>
                </ejs-treegrid>
            </div>
        </div>
</template>
    
<script setup>
import { TreeGridComponent, ColumnsDirective, ColumnDirective,Page } from "@syncfusion/ej2-vue-treegrid";

// Data for the first Authors Table
const data1 = ref([
  { Author: 'Johnmichael', Function: 'Manager', Status: 'Online', Employed: '23/04/18', Edit },
  { Author: 'Alexa Liras', Function: 'Programator', Status: 'Offline', Employed: '23/04/18', Edit },
  { Author: 'Laurent Perrier', Function: 'Executive', Status: 'Online', Employed: '11/01/19', Edit },
  { Author: 'Michaellevi', Function: 'Programator', Status: 'Online', Employed: '19/09/17', Edit },
  { Author: 'Bruce Mans', Function: 'Manager', Status: 'Offline', Employed: '10/10/21', Edit },
  { Author: 'Alexander', Function: 'Programator', Status: 'Offline', Employed: '14/09/20', Edit },
]);

// Data for the Second Projects Table
const data2 = ref([
  { Companies: 'Material XD Version', Members: 'profile', Budget: '$14,000', Completion: '60%' },
  { Companies: 'Add Progress Track', Members: 'profile', Budget: '$3,000', Completion: '10%' },
  { Companies: 'Fix PlatformError', Members: 'profile', Budget: 'Not Set', Completion: '100%' },
  { Companies: 'Launch Our Mobile App', Members: 'profile', Budget: '$20,000', Completion: '100%' },
  { Companies: 'Add the New Pricing Page', Members: 'profile', Budget: '$500', Completion: '25%' },
  { Companies: 'Redesign New Online Shop', Members: 'profile', Budget: '$2,000', Completion: '40%' },
  ]);
</script>

<style scoped>
 @import "../node_module/@syncfusion/ej2-base/styles.css";
 @import "~@syncfusion/ej2-base/styles.css";

    .Authors Table {
       margin: 20px 0;
    }
    h1 {
       text-align: center;
    }
    .Projects Table {
       margin: 20px 0;
    }
    h2 {
      text-align: center;
    }
</style>

