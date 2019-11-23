# Gridy Grid All-in-One Bundle

This is Gridy Grid datatables library bundle can be used to load all needed Gridy Grid code with one file for convenience 
or to have wide browser support including legacy versions like Internet Explorer 11.


## Usage

```html
<script src="/node_modules/gridy-grid-bundle/compat/fetch.umd.js"></script>
<script src="/node_modules/gridy-grid-bundle/compat/polyfill.min.js"></script>
<script src="/node_modules/gridy-grid-bundle/compat/webcomponents-lite.js" charset="utf-8"></script>
<script src="/node_modules/gridy-grid-bundle/compat/custom-elements-es5-adapter.js" charset="utf-8"></script>
<script src="/node_modules/gridy-grid-bundle/compat/event-target.js"></script>

<script src="/node_modules/gridy-grid-bundle/dist/gridy-grid-legacy-bundle.js"></script>

<link rel="stylesheet" type="text/css" href="/node_modules/gridy-grid-bundle/antd.min.css">

<div class="ant-table ant-table-default ant-table-scroll-position-left">
    <div class="ant-table ant-table-default ant-table-scroll-position-left">
        <gridy-grid theme="antd" id="gridyGrid" basePath="/node_modules/gridy-grid/src">
            <gridy-data-source dataref="gridData">
                <gridy-data-field title="Title" path="$.title"></gridy-data-field>
                <gridy-data-field title="Price" path="$.price"></gridy-data-field>
            </gridy-data-source>
            <gridy-spinner></gridy-spinner>
            <gridy-filter id="gridyFilter"></gridy-filter>
            <gridy-table id="gridyTable" rd-tpl-fmt="handlebars">
            </gridy-table>
            <gridy-pager id="gridyPager"></gridy-pager>
            <gridy-table-info id="gridyTableInfo"></gridy-table-info>
        </gridy-grid>
    </div>
</div>
<style>
    th.sort.sort-desc::after {
        content: '▼';
    }
    th.sort.sort-asc::after {
        content: '▲';
    }
</style>
<script>

    let data = [];
    for (let i = 0; i < 25; i++) {
        data.push({ title: 'row' + i, price: 100 * i })
    }
    window.gridData = data;

    customElements.define('gridy-grid', m.GridyGrid);

</script>
```


## Modern browser build

Just pack everything in one file. No transpilations. Esm modules with components will be bundled in one file.

```
npm run-script build
```

## Legacy browser build

```
npm run-script build-legacy
```

## Usage

check index.html for example serve it with http server like this:

```
npx http-server
```

