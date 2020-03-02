define({ "api": [
  {
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "optional": false,
            "field": "varname1",
            "description": "<p>No type.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "varname2",
            "description": "<p>With type.</p>"
          }
        ]
      }
    },
    "type": "",
    "url": "",
    "version": "0.0.0",
    "filename": "./apidoc_result/main.js",
    "group": "E:\\lion\\apidoc\\apidoc_result\\main.js",
    "groupTitle": "E:\\lion\\apidoc\\apidoc_result\\main.js",
    "name": ""
  },
  {
    "type": "POST",
    "url": "/api/stockout_orders",
    "title": "新增出库单",
    "version": "1.0.0",
    "name": "新增出库单",
    "group": "出库单",
    "description": "<p>新增出库单</p>",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "status",
            "optional": false,
            "field": "200",
            "description": "<p>状态码</p>"
          },
          {
            "group": "Success 200",
            "type": "data",
            "optional": false,
            "field": "stockout_order_data",
            "description": "<p>简略描述</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "成功返回:",
          "content": "HTTP 1.1/ 200K\n[\n    {\n        \"wms_order_code\": \"wms001\",\n        \"order_id\": 1\n    }\n]",
          "type": "Json"
        }
      ]
    },
    "parameter": {
      "examples": [
        {
          "title": "请求参数示例",
          "content": "{\n  \"erp_order_code\": \"erp001\",\n  \"state\": \"created\"\n}",
          "type": "Json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Response-Fail:",
          "content": "HTTP 1.1/ 404K\n{\n    'status': 422,\n    'msg': 'err'\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./app/stockout_order.py",
    "groupTitle": "出库单"
  },
  {
    "type": "GET",
    "url": "/api/stockout_orders",
    "title": "查询出库单",
    "version": "1.0.0",
    "name": "查询出库单",
    "group": "出库单",
    "description": "<p>查询出库单</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "order_type",
            "optional": false,
            "field": "order_type",
            "description": "<p>单据状态</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "status",
            "optional": false,
            "field": "200",
            "description": "<p>状态码</p>"
          },
          {
            "group": "Success 200",
            "type": "data",
            "optional": false,
            "field": "stockout_order_data",
            "description": "<p>简略描述</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "成功返回:",
          "content": "HTTP 1.1/ 200K\n[\n    {\n        'id': 1,\n        'erp_order_code': 'erp001',\n        'state': 'checked',\n    }\n]",
          "type": "Json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Response-Fail:",
          "content": "HTTP 1.1/ 404K\n{\n    'status': 422,\n    'msg': 'Fail'\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./app/stockout_order.py",
    "groupTitle": "出库单"
  }
] });
