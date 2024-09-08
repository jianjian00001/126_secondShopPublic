<template>


  <div class="eww">
    <el-backtop :bottom="10" :right="0">
      <div
        class="yy"
      >
        返回顶部
      </div>
    </el-backtop>
    <!-- 回到顶部 -->
    <el-card>
      <el-form
        ref="fruitRules"
        :model="admin"
        :rules="rules"
        label-width="120px"
        class="demo-ruleForm"
      >

        <el-row>

          <el-col :span="8">
            <el-form-item
              label="商品名称"
              prop="productName"
            >
              <el-input v-model="admin.productName"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="7">
            <el-form-item
              label="商品一级分类"
              prop="oneCategoryId"
            >
              <el-select v-model="admin.oneCategoryId" placeholder="请选择商品分类">
                <el-option
                  v-for="item in optionss"
                  :key="item.values"
                  :label="item.labels"
                  :value="item.values">
                </el-option>
              </el-select>
            </el-form-item>
          </el-col>
          <el-col :span="6">
            <el-form-item
              label="商品二级分类"
              prop="twoCategoryId"
            >
              <el-select v-model="admin.twoCategoryId" placeholder="请选择商品分类">
                <el-option
                  v-for="item in options"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                  :disabled="item.disabled">
                </el-option>
              </el-select>
            </el-form-item>
          </el-col>
        </el-row>


        <el-row>
          <el-col :span="8">
            <el-form-item
              label="商品品牌"
              prop="brandId"
            >
              <el-select v-model="admin.brandId" placeholder="请选择品牌">
                <el-option
                  v-for="item in optionssss"
                  :key="item.valuesss"
                  :label="item.labelsss"
                  :value="item.valuesss"
                  :disabled="item.disabled"
                >
                </el-option>
              </el-select>
            </el-form-item>
          </el-col>
          <el-col :span="7">
            <el-form-item
              label="商品类型品牌"
              prop="threeCategoryId"
            >
              <el-select v-model="admin.threeCategoryId" placeholder="请选择商品类型品牌">
                <el-option
                  v-for="item in optionsss"
                  :key="item.valuess"
                  :label="item.labelss"
                  :value="item.valuess"
                  :disabled="item.disabled"
                >
                </el-option>
              </el-select>
            </el-form-item>
          </el-col>
          <el-col :span="6">
            <el-form-item
              label="商品数量"
              prop="productNum"
            >
              <el-input v-model="admin.productNum"></el-input>
            </el-form-item>
          </el-col>


        </el-row>


        <el-row>
          <el-col :span="8">
            <el-form-item
              label="出卖商品数量"
              prop="productMnum"
            >
              <el-input v-model="admin.productMnum"></el-input>
            </el-form-item>

          </el-col>
          <el-col :span="7">

          </el-col>
          <el-col :span="6">
            <el-form-item
              label="商品颜色1"
              prop="productCs"
            >
              <el-input v-model="admin.productCs"></el-input>
            </el-form-item>
          </el-col>

        </el-row>


        <el-row>
          <el-col :span="8">
            <el-form-item
              label="商品颜色2"
              prop="productCd"
            >
              <el-input v-model="admin.productCd"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="7">
            <el-form-item
              label="商品颜色3"
              prop="productCf"
            >
              <el-input v-model="admin.productCf"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="6">
            <el-form-item
              label="商品颜色4"
              prop="productCg"
            >
              <el-input v-model="admin.productCg"></el-input>
            </el-form-item>
          </el-col>
        </el-row>

        <el-row>
          <el-col :span="8">
            <el-form-item
              label="价格"
              prop="productPrice"
            >
              <el-input v-model="admin.productPrice"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="7">
            <el-form-item
              label="重量"
              prop="weight"
            >
              <el-input v-model="admin.weight"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item
              label="商品描述"
              prop="descript"
            >
              <el-input type="textarea" :rows="2" v-model="admin.descript"></el-input>
            </el-form-item>
          </el-col>
        </el-row>


        <el-row>
          <el-col :span="8">
            <el-form-item
              label="商品描述图片1"
              prop="productIm"
            >
              <el-upload
                class="upload-demo"
                action="http://localhost:8888/files/uplode"
                :on-preview="handlePreview"
                :on-remove="handleRemove"
                :file-list="fileList"
                :on-success="filesUplodeSeccessd"
                list-type="picture">
                <el-button size="small" type="primary">点击上传</el-button>
                <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
              </el-upload>
            </el-form-item>
          </el-col>
          <el-col :span="7">
            <el-form-item
              label="商品描述图片2"
              prop="productImd"
            >
              <el-upload
                class="upload-demo"
                action="http://localhost:8888/files/uplode"
                :on-preview="handlePreview"
                :on-remove="handleRemove"
                :file-list="fileList"
                :on-success="filesUplodeSeccessf"
                list-type="picture">
                <el-button size="small" type="primary">点击上传</el-button>
                <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
              </el-upload>
            </el-form-item>
          </el-col>
          <el-col :span="6">
            <el-form-item
              label="商品图片"
              prop="productImage"
            >
              <el-upload
                class="upload-demo"
                action="http://localhost:8888/files/uplode"
                :on-preview="handlePreview"
                :on-remove="handleRemove"
                :file-list="fileList"
                :on-success="filesUplodeSeccess"
                list-type="picture">
                <el-button size="small" type="primary">点击上传</el-button>
                <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
              </el-upload>
            </el-form-item>
          </el-col>
        </el-row>


        <el-row>
          <el-col :span="8">
            <el-form-item
              label="商品描述图片3"
              prop="productImf"
            >
              <el-upload
                class="upload-demo"
                action="http://localhost:8888/files/uplode"
                :on-preview="handlePreview"
                :on-remove="handleRemove"
                :file-list="fileList"
                :on-success="filesUplodeSeccessg"
                list-type="picture">
                <el-button size="small" type="primary">点击上传</el-button>
                <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
              </el-upload>
            </el-form-item>
          </el-col>
          <el-col :span="7">
            <el-form-item
              label="商品描述图片4"
              prop="productImg"
            >
              <el-upload
                class="upload-demo"
                action="http://localhost:8888/files/uplode"
                :on-preview="handlePreview"
                :on-remove="handleRemove"
                :file-list="fileList"
                :on-success="filesUplodeSeccessh"
                list-type="picture">
                <el-button size="small" type="primary">点击上传</el-button>
                <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
              </el-upload>
            </el-form-item>
          </el-col>
          <el-col :span="6">
            <el-form-item
              label="商品规格图片1"
              prop="productMd"
            >
              <el-upload
                class="upload-demo"
                action="http://localhost:8888/files/uplode"
                :on-preview="handlePreview"
                :on-remove="handleRemove"
                :file-list="fileList"
                :on-success="filesUplodeSeccesse"
                list-type="picture">
                <el-button size="small" type="primary">点击上传</el-button>
                <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
              </el-upload>
            </el-form-item>
          </el-col>

        </el-row>


        <el-row>
          <el-col :span="8">
            <el-form-item
              label="商品规格图片2"
              prop="productMf"
            >
              <el-upload
                class="upload-demo"
                action="http://localhost:8888/files/uplode"
                :on-preview="handlePreview"
                :on-remove="handleRemove"
                :file-list="fileList"
                :on-success="filesUplodeSeccessr"
                list-type="picture">
                <el-button size="small" type="primary">点击上传</el-button>
                <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
              </el-upload>
            </el-form-item>
          </el-col>
          <el-col :span="7">
            <el-form-item
              label="商品规格图片3"
              prop="productMg"
            >
              <el-upload
                class="upload-demo"
                action="http://localhost:8888/files/uplode"
                :on-preview="handlePreview"
                :on-remove="handleRemove"
                :file-list="fileList"
                :on-success="filesUplodeSeccesst"
                list-type="picture">
                <el-button size="small" type="primary">点击上传</el-button>
                <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
              </el-upload>
            </el-form-item>
          </el-col>
          <el-col :span="6">
            <el-form-item
              label="卖家二维码"
              prop="productErm"
            >
              <el-upload
                class="upload-demo"
                action="http://localhost:8888/files/uplode"
                :on-preview="handlePreview"
                :on-remove="handleRemove"
                :file-list="fileList"
                :on-success="filesUplodeSeccessy"
                list-type="picture">
                <el-button size="small" type="primary">点击上传</el-button>
                <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
              </el-upload>
            </el-form-item>
          </el-col>

        </el-row>



        <el-form-item>
          <el-button type="primary" @click="onSubmit('fruitRules')"
          >立即创建
          </el-button
          >
          <el-button>取消</el-button>
        </el-form-item>

      </el-form>
    </el-card>
  </div>

</template>

<script>
  export default {
    name: 'AddUser',
    created () {
      let productId = this.$route.query.productId;
      let _this = this;
      axios.get('http://localhost:8888/info/find/' + productId).then(function (response) {
        _this.admin = response.data;
      });
    },
    data () {
      return {

        optionssss: [{
          valuesss: '0',
          labelsss: '游戏手机(手机)',
          disabled: true
        }, {
          valuesss: '114',
          labelsss: '华为',
        }, {
          valuesss: '115',
          labelsss: '小米',
        }, {
          valuesss: '116',
          labelsss: 'OPPO',
        }, {
          valuesss: '117',
          labelsss: '苹果',
        },

          {
            valuesss: '0',
            labelsss: '5G手机(手机)',
            disabled: true
          }, {
            valuesss: '7',
            labelsss: '三星',
          }, {
            valuesss: '8',
            labelsss: 'OPPO',
          }, {
            valuesss: '9',
            labelsss: '华为',
          },

          {
            valuesss: '0',
            labelsss: '拍照手机(手机)',
            disabled: true
          }, {
            valuesss: '14',
            labelsss: '三星',
          }, {
            valuesss: '15',
            labelsss: 'OPPO',
          }, {
            valuesss: '16',
            labelsss: 'vivo',
          },
          {
            valuesss: '17',
            labelsss: '红米',
          },
          {
            valuesss: '19',
            labelsss: '华为',
          },

          {
            valuesss: '0',
            labelsss: '音乐手机(手机)',
            disabled: true
          }, {
            valuesss: '20',
            labelsss: '三星',
          }, {
            valuesss: '21',
            labelsss: 'OPPO',
          }, {
            valuesss: '22',
            labelsss: '小米',
          },

          {
            valuesss: '0',
            labelsss: '老人手机(手机)',
            disabled: true
          }, {
            valuesss: '23',
            labelsss: '三星',
          }, {
            valuesss: '24',
            labelsss: '莫凡',
          }, {
            valuesss: '25',
            labelsss: 'MATE',
          },

          {
            valuesss: '0',
            labelsss: '商务手机(手机)',
            disabled: true
          }, {
            valuesss: '26',
            labelsss: '三星',
          }, {
            valuesss: '27',
            labelsss: '华为',
          }, {
            valuesss: '28',
            labelsss: 'MATE',
          },

          {
            valuesss: '0',
            labelsss: '4G手机(手机)',
            disabled: true
          }, {
            valuesss: '29',
            labelsss: '华为',
          }, {
            valuesss: '30',
            labelsss: '小米',
          }, {
            valuesss: '31',
            labelsss: '三星',
          },
          {
            valuesss: '32',
            labelsss: 'OPPO',
          },
          {
            valuesss: '33',
            labelsss: '苹果',
          },
          {
            valuesss: '34',
            labelsss: 'vivo',
          },
          {
            valuesss: '35',
            labelsss: 'MATE',
          }, {
            valuesss: '36',
            labelsss: '红米',
          }, {
            valuesss: '37',
            labelsss: '莫凡',
          },

          {
            valuesss: '0',
            labelsss: '办公本(电脑整机)',
            disabled: true
          }, {
            valuesss: '118',
            labelsss: '苹果',
          }, {
            valuesss: '119',
            labelsss: '戴尔',
          }, {
            valuesss: '120',
            labelsss: '联想',
          },

          {
            valuesss: '0',
            labelsss: '游戏本(电脑整机)',
            disabled: true
          }, {
            valuesss: '45',
            labelsss: '苹果',
          }, {
            valuesss: '46',
            labelsss: '戴尔',
          }, {
            valuesss: '47',
            labelsss: '索尼',
          },
          {
            valuesss: '48',
            labelsss: '华硕',
          },
          {
            valuesss: '49',
            labelsss: '神舟',
          },

          {
            valuesss: '0',
            labelsss: '台式机(电脑整机)',
            disabled: true
          }, {
            valuesss: '50',
            labelsss: 'IBM',
          }, {
            valuesss: '51',
            labelsss: '苹果',
          }, {
            valuesss: '52',
            labelsss: '戴尔',
          },
          {
            valuesss: '53',
            labelsss: '索尼',
          },
          {
            valuesss: '54',
            labelsss: '联想',
          },
          {
            valuesss: '55',
            labelsss: '华硕',
          },
          {
            valuesss: '56',
            labelsss: '神舟',
          },

          {
            valuesss: '0',
            labelsss: '平板电脑(电脑整机)',
            disabled: true
          }, {
            valuesss: '57',
            labelsss: '苹果',
          }, {
            valuesss: '58',
            labelsss: '戴尔',
          }, {
            valuesss: '59',
            labelsss: '联想',
          },
          {
            valuesss: '60',
            labelsss: '华硕',
          },
          {
            valuesss: '61',
            labelsss: '神舟',
          },

          {
            valuesss: '0',
            labelsss: '一体机(电脑整机)',
            disabled: true
          }, {
            valuesss: '62',
            labelsss: 'IBM',
          }, {
            valuesss: '63',
            labelsss: '戴尔',
          }, {
            valuesss: '64',
            labelsss: '索尼',
          },
          {
            valuesss: '65',
            labelsss: '联想',
          },
          {
            valuesss: '66',
            labelsss: '华硕',
          },

          {
            valuesss: '0',
            labelsss: '手机壳(手机配件)',
            disabled: true
          }, {
            valuesss: '121',
            labelsss: '苹果',
          }, {
            valuesss: '122',
            labelsss: 'vivo',
          }, {
            valuesss: '123',
            labelsss: '红米',
          },

          {
            valuesss: '0',
            labelsss: '手机膜(手机配件)',
            disabled: true
          }, {
            valuesss: '80',
            labelsss: '华为',
          }, {
            valuesss: '81',
            labelsss: '小米',
          }, {
            valuesss: '82',
            labelsss: '小米',
          }, {
            valuesss: '83',
            labelsss: 'OPPO',
          }, {
            valuesss: '84',
            labelsss: '苹果',
          }, {
            valuesss: '85',
            labelsss: 'vivo',
          }, {
            valuesss: '86',
            labelsss: '红米',
          }, {
            valuesss: '87',
            labelsss: '莫凡',
          },

          {
            valuesss: '0',
            labelsss: '数据线(手机配件)',
            disabled: true
          }, {
            valuesss: '88',
            labelsss: '小米',
          }, {
            valuesss: '89',
            labelsss: '三星',
          }, {
            valuesss: '90',
            labelsss: 'OPPO',
          }, {
            valuesss: '91',
            labelsss: '苹果',
          }, {
            valuesss: '92',
            labelsss: 'vivo',
          }, {
            valuesss: '93',
            labelsss: '红米',
          }, {
            valuesss: '94',
            labelsss: 'MATE',
          }, {
            valuesss: '95',
            labelsss: '莫凡',
          },
          {
            valuesss: '96',
            labelsss: '华为',
          },

          {
            valuesss: '0',
            labelsss: '充电器(手机配件)',
            disabled: true
          }, {
            valuesss: '98',
            labelsss: '三星',
          }, {
            valuesss: '99',
            labelsss: 'OPPO',
          }, {
            valuesss: '100',
            labelsss: '苹果',
          }, {
            valuesss: '101',
            labelsss: 'vivo',
          }, {
            valuesss: '102',
            labelsss: '红米',
          }, {
            valuesss: '103',
            labelsss: 'MATE',
          }, {
            valuesss: '104',
            labelsss: '莫凡',
          }, {
            valuesss: '105',
            labelsss: '华为',
          },
          {
            valuesss: '106',
            labelsss: '小米',
          },

          {
            valuesss: '0',
            labelsss: '手机饰品(手机配件)',
            disabled: true
          }, {
            valuesss: '127',
            labelsss: '英悦',
          }, {
            valuesss: '128',
            labelsss: '江铭',
          },

          {
            valuesss: '0',
            labelsss: '手机支架(手机配件)',
            disabled: true
          }, {
            valuesss: '124',
            labelsss: 'wisebrave',
          }, {
            valuesss: '125',
            labelsss: '埃普',
          },
          {
            valuesss: '126',
            labelsss: 'venicen',
          },

          {
            valuesss: '0',
            labelsss: '显示器(电脑配件)',
            disabled: true
          }, {
            valuesss: '129',
            labelsss: '三星',
          }, {
            valuesss: '130',
            labelsss: 'HKC',
          },
          {
            valuesss: '131',
            labelsss: 'AOC AG272QCX',
          },

          {
            valuesss: '0',
            labelsss: 'CPU(电脑配件)',
            disabled: true
          }, {
            valuesss: '135',
            labelsss: 'Intel',
          }, {
            valuesss: '136',
            labelsss: 'AMD',
          },
          {
            valuesss: '137',
            labelsss: 'IBM',
          },

          {
            valuesss: '0',
            labelsss: '主板(电脑配件)',
            disabled: true
          }, {
            valuesss: '141',
            labelsss: '华硕',
          }, {
            valuesss: '142',
            labelsss: '技嘉',
          },
          {
            valuesss: '143',
            labelsss: '七彩虹',
          },

          {
            valuesss: '0',
            labelsss: '显卡(电脑配件)',
            disabled: true
          }, {
            valuesss: '144',
            labelsss: '三星',
          }, {
            valuesss: '145',
            labelsss: '华硕',
          },

          {
            valuesss: '0',
            labelsss: '硬盘(电脑配件)',
            disabled: true
          }, {
            valuesss: '148',
            labelsss: '三星',
          }, {
            valuesss: '149',
            labelsss: '希捷',
          }, {
            valuesss: '150',
            labelsss: '迈拓',
          },

          {
            valuesss: '0',
            labelsss: '机箱(电脑配件)',
            disabled: true
          }, {
            valuesss: '355',
            labelsss: '三星',
          }, {
            valuesss: '356',
            labelsss: 'HKC',
          }, {
            valuesss: '357',
            labelsss: '华硕',
          },

          {
            valuesss: '0',
            labelsss: '散热器(电脑配件)',
            disabled: true
          }, {
            valuesss: '358',
            labelsss: '技嘉',
          }, {
            valuesss: '359',
            labelsss: '希捷',
          }, {
            valuesss: '360',
            labelsss: 'IBM',
          },

          {
            valuesss: '0',
            labelsss: '电源(电脑配件)',
            disabled: true
          }, {
            valuesss: '361',
            labelss: 'Intel',
          }, {
            valuesss: '362',
            labelsss: '华硕',
          }, {
            valuesss: '363',
            labelsss: '迈拓',
          },

          {
            valuesss: '0',
            labelsss: '数码相机(摄影摄像)',
            disabled: true
          }, {
            valuesss: '157',
            labelsss: '佳能',
          }, {
            valuesss: '158',
            labelsss: '尼康',
          }, {
            valuesss: '159',
            labelsss: '富士',
          },

          {
            valuesss: '0',
            labelsss: '微单相机(摄影摄像)',
            disabled: true
          }, {
            valuesss: '160',
            labelsss: '富士',
          }, {
            valuesss: '161',
            labelsss: '三星',
          },

          {
            valuesss: '0',
            labelsss: '单反相机(摄影摄像)',
            disabled: true
          }, {
            valuesss: '162',
            labelsss: '宾得',
          }, {
            valuesss: '163',
            labelsss: '索尼',
          },

          {
            valuesss: '0',
            labelsss: '拍立得(摄影摄像)',
            disabled: true
          }, {
            valuesss: '164',
            labelsss: '尼康',
          }, {
            valuesss: '165',
            labelsss: '佳能',
          }, {
            valuesss: '166',
            labelsss: '富士',
          },

          {
            valuesss: '0',
            labelsss: '摄像机(摄影摄像)',
            disabled: true
          }, {
            valuesss: '167',
            labelsss: '三星',
          }, {
            valuesss: '168',
            labelsss: '宾得',
          },

          {
            valuesss: '0',
            labelsss: '运动相机(摄影摄像)',
            disabled: true
          }, {
            valuesss: '169',
            labelsss: '三星',
          }, {
            valuesss: '170',
            labelsss: '佳能',
          }, {
            valuesss: '171',
            labelsss: '尼康',
          },

          {
            valuesss: '0',
            labelsss: '储存卡(数码配件)',
            disabled: true
          }, {
            valuesss: '175',
            labelsss: '东芝',
          }, {
            valuesss: '176',
            labelsss: '威刚',
          }, {
            valuesss: '177',
            labelsss: '睿量',
          },

          {
            valuesss: '0',
            labelsss: '三脚架(数码配件)',
            disabled: true
          }, {
            valuesss: '180',
            labelsss: '曼富图',
          }, {
            valuesss: '181',
            labelsss: '捷信',
          },

          {
            valuesss: '0',
            labelsss: '三脚架(数码配件)',
            disabled: true
          }, {
            valuesss: '180',
            labelsss: '曼富图',
          }, {
            valuesss: '181',
            labelsss: '捷信',
          },

          {
            valuesss: '0',
            labelsss: '相机包(数码配件)',
            disabled: true
          }, {
            valuesss: '185',
            labelsss: '佳能',
          }, {
            valuesss: '186',
            labelsss: '尼康',
          }, {
            valuesss: '187',
            labelsss: '宾得',
          },

          {
            valuesss: '0',
            labelsss: '滤镜(数码配件)',
            disabled: true
          }, {
            valuesss: '194',
            labelsss: '佳能',
          }, {
            valuesss: '195',
            labelsss: '尼康',
          },

          {
            valuesss: '0',
            labelsss: '手柄(数码配件)',
            disabled: true
          }, {
            valuesss: '191',
            labelsss: 'Xbox微软',
          }, {
            valuesss: '192',
            labelsss: 'logitech罗技',
          }, {
            valuesss: '193',
            labelsss: 'BETOP北通',
          },

          {
            valuesss: '0',
            labelsss: '读卡器(数码配件)',
            disabled: true
          }, {
            valuesss: '198',
            labelsss: '捷信',
          }, {
            valuesss: '199',
            labelsss: '曼富图',
          },

          {
            valuesss: '0',
            labelsss: '镜头(数码配件)',
            disabled: true
          }, {
            valuesss: '196',
            labelsss: '宾得',
          }, {
            valuesss: '197',
            labelsss: '佳能',
          },

          {
            valuesss: '0',
            labelsss: '镜头(数码配件)',
            disabled: true
          }, {
            valuesss: '196',
            labelsss: '宾得',
          }, {
            valuesss: '197',
            labelsss: '佳能',
          },

          {
            valuesss: '0',
            labelsss: '耳机(影音娱乐)',
            disabled: true
          }, {
            valuesss: '204',
            labelsss: 'Nank南卡lite Pro',
          }, {
            valuesss: '205',
            labelsss: 'Apple AirPods pro',
          },
          {
            valuesss: '206',
            labelsss: '1MORE ComfoBuds Pro',
          },

          {
            valuesss: '0',
            labelsss: '音响(影音娱乐)',
            disabled: true
          }, {
            valuesss: '208',
            labelsss: 'Hivi 惠威',
          }, {
            valuesss: '209',
            labelsss: '漫步者',
          },

          {
            valuesss: '0',
            labelsss: '收音机(影音娱乐)',
            disabled: true
          }, {
            valuesss: '213',
            labelsss: '安键ANJAN',
          }, {
            valuesss: '214',
            labelsss: '金业Goldyip',
          }, {
            valuesss: '215',
            labelsss: '德生TECSUN',
          },

          {
            valuesss: '0',
            labelsss: '麦克风(影音娱乐)',
            disabled: true
          }, {
            valuesss: '216',
            labelsss: 'Hivi 惠威',
          }, {
            valuesss: '217',
            labelsss: '漫步者',
          }, {
            valuesss: '218',
            labelsss: '金业Goldyip',
          },

          {
            valuesss: '0',
            labelsss: 'MP3(影音娱乐)',
            disabled: true
          }, {
            valuesss: '219',
            labelsss: 'Nank南卡lite Pro',
          }, {
            valuesss: '220',
            labelsss: '漫步者',
          },

          {
            valuesss: '0',
            labelsss: 'MP4(影音娱乐)',
            disabled: true
          }, {
            valuesss: '221',
            labelsss: '漫步者',
          }, {
            valuesss: '222',
            labelsss: '1MORE ComfoBuds Pro',
          },

          {
            valuesss: '0',
            labelsss: '音频线(影音娱乐)',
            disabled: true
          }, {
            valuesss: '223',
            labelsss: 'Nank南卡lite Pro',
          }, {
            valuesss: '224',
            labelsss: '德生TECSUN',
          },
          {
            valuesss: '225',
            labelsss: 'Hivi 惠威',
          },

          {
            valuesss: '0',
            labelsss: '智能手表(智能设备)',
            disabled: true
          }, {
            valuesss: '272',
            labelsss: 'iWatch',
          }, {
            valuesss: '273',
            labelsss: '苹果',
          },
          {
            valuesss: '274',
            labelsss: '艾玛酷',
          },

          {
            valuesss: '0',
            labelsss: '智能手环(智能设备)',
            disabled: true
          }, {
            valuesss: '275',
            labelsss: 'iWatch',
          }, {
            valuesss: '276',
            labelsss: '艾玛酷',
          },
          {
            valuesss: '277',
            labelsss: '苹果',
          },

          {
            valuesss: '0',
            labelsss: '监控摄像(智能设备)',
            disabled: true
          }, {
            valuesss: '281',
            labelsss: '安讯士',
          }, {
            valuesss: '282',
            labelsss: '韩华',
          },
          {
            valuesss: '283',
            labelsss: '三星',
          },

          {
            valuesss: '0',
            labelsss: '智能眼镜(智能设备)',
            disabled: true
          }, {
            valuesss: '286',
            labelsss: '索尼',
          }, {
            valuesss: '287',
            labelsss: 'VIVE',
          },

          {
            valuesss: '0',
            labelsss: '健康监测(智能设备)',
            disabled: true
          }, {
            valuesss: '290',
            labelsss: '三星',
          }, {
            valuesss: '293',
            labelsss: '苹果',
          },

          {
            valuesss: '0',
            labelsss: '无人机(智能设备)',
            disabled: true
          }, {
            valuesss: '291',
            labelsss: '三星',
          }, {
            valuesss: '292',
            labelsss: '索尼',
          },
          {
            valuesss: '294',
            labelsss: 'VIVE',
          },

          {
            valuesss: '0',
            labelsss: '智能机器人(智能设备)',
            disabled: true
          }, {
            valuesss: '301',
            labelsss: '苹果',
          }, {
            valuesss: '302',
            labelsss: '三星',
          },
          {
            valuesss: '303',
            labelsss: '索尼',
          },

          {
            valuesss: '0',
            labelsss: '点读机(电子教育)',
            disabled: true
          }, {
            valuesss: '298',
            labelsss: '外研通VIATON',
          }, {
            valuesss: '299',
            labelsss: '易读宝',
          },
          {
            valuesss: '300',
            labelsss: '朗读者',
          },

          {
            valuesss: '0',
            labelsss: '学生平板(电子教育)',
            disabled: true
          }, {
            valuesss: '307',
            labelsss: '步步高',
          }, {
            valuesss: '308',
            labelsss: '读书郎',
          },
          {
            valuesss: '309',
            labelsss: '苹果',
          },

          {
            valuesss: '0',
            labelsss: '录音笔(电子教育)',
            disabled: true
          }, {
            valuesss: '317',
            labelsss: '苹果',
          }, {
            valuesss: '318',
            labelsss: '诺亚舟',
          },
          {
            valuesss: '319',
            labelsss: '外研通VIATON',
          },

          {
            valuesss: '0',
            labelsss: '电子书(电子教育)',
            disabled: true
          }, {
            valuesss: '315',
            labelsss: '索尼',
          }, {
            valuesss: '316',
            labelsss: '摩托罗拉',
          },

          {
            valuesss: '0',
            labelsss: '电子词典(电子教育)',
            disabled: true
          }, {
            valuesss: '310',
            labelsss: '步步高',
          }, {
            valuesss: '311',
            labelsss: '诺亚舟',
          },

          {
            valuesss: '0',
            labelsss: '复读机(电子教育)',
            disabled: true
          }, {
            valuesss: '320',
            labelsss: '易读宝',
          }, {
            valuesss: '321',
            labelsss: '步步高',
          },

          {
            valuesss: '0',
            labelsss: '翻译机(电子教育)',
            disabled: true
          }, {
            valuesss: '322',
            labelsss: '苹果',
          }, {
            valuesss: '323',
            labelsss: '索尼',
          },

          {
            valuesss: '0',
            labelsss: '游戏机(游戏设备)',
            disabled: true
          }, {
            valuesss: '231',
            labelsss: '任天堂',
          }, {
            valuesss: '232',
            labelsss: '索尼',
          },
          {
            valuesss: '233',
            labelsss: '微软',
          },

          {
            valuesss: '0',
            labelsss: '游戏手柄(游戏设备)',
            disabled: true
          }, {
            valuesss: '237',
            labelsss: 'BETOP北通',
          }, {
            valuesss: '238',
            labelsss: 'Xbox微软',
          },
          {
            valuesss: '239',
            labelsss: 'logitech罗技',
          },

          {
            valuesss: '0',
            labelsss: '游戏软件(游戏设备)',
            disabled: true
          }, {
            valuesss: '240',
            labelsss: '微软',
          }, {
            valuesss: '241',
            labelsss: '索尼',
          },

          {
            valuesss: '0',
            labelsss: 'VR眼镜(游戏设备)',
            disabled: true
          }, {
            valuesss: '244',
            labelsss: 'HTC',
          }, {
            valuesss: '245',
            labelsss: 'Oculus',
          },

          {
            valuesss: '0',
            labelsss: '游戏耳机(游戏设备)',
            disabled: true
          }, {
            valuesss: '246',
            labelsss: '索尼',
          }, {
            valuesss: '247',
            labelsss: '微软',
          },
          {
            valuesss: '248',
            labelsss: '任天堂',
          },

          {
            valuesss: '0',
            labelsss: '路由器(网络产品)',
            disabled: true
          }, {
            valuesss: '252',
            labelsss: 'TPLINK',
          }, {
            valuesss: '253',
            labelsss: '腾达',
          },
          {
            valuesss: '254',
            labelsss: '水星',
          },

          {
            valuesss: '0',
            labelsss: '机顶盒(网络产品)',
            disabled: true
          }, {
            valuesss: '258',
            labelsss: '小米',
          }, {
            valuesss: '259',
            labelsss: '天猫魔盒',
          },
          {
            valuesss: '260',
            labelsss: '华为',
          },

          {
            valuesss: '0',
            labelsss: '交换机(网络产品)',
            disabled: true
          }, {
            valuesss: '263',
            labelsss: '思科CISCO',
          }, {
            valuesss: '264',
            labelsss: 'H3C',
          },

          {
            valuesss: '0',
            labelsss: '网卡(网络产品)',
            disabled: true
          }, {
            valuesss: '265',
            labelsss: '华为',
          }, {
            valuesss: '266',
            labelsss: '小米',
          },

          {
            valuesss: '0',
            labelsss: '网线(网络产品)',
            disabled: true
          }, {
            valuesss: '267',
            labelsss: '小米',
          }, {
            valuesss: '268',
            labelsss: '华为',
          },

          {
            valuesss: '0',
            labelsss: '鼠标(外设产品)',
            disabled: true
          }, {
            valuesss: '327',
            labelsss: '罗技',
          }, {
            valuesss: '328',
            labelsss: '微软',
          }, {
            valuesss: '329',
            labelsss: '雷蛇',
          },

          {
            valuesss: '0',
            labelsss: '键盘(外设产品)',
            disabled: true
          }, {
            valuesss: '330',
            labelsss: '罗技',
          }, {
            valuesss: '331',
            labelsss: '微软',
          }, {
            valuesss: '332',
            labelsss: '雷蛇',
          },

          {
            valuesss: '0',
            labelsss: 'U盘(外设产品)',
            disabled: true
          }, {
            valuesss: '336',
            labelsss: '金士顿',
          }, {
            valuesss: '337',
            labelsss: '闪迪',
          }, {
            valuesss: '338',
            labelsss: '东芝',
          },

          {
            valuesss: '0',
            labelsss: '移动硬盘(外设产品)',
            disabled: true
          }, {
            valuesss: '345',
            labelsss: '华为',
          }, {
            valuesss: '346',
            labelsss: '苹果',
          },

          {
            valuesss: '0',
            labelsss: '鼠标垫(外设产品)',
            disabled: true
          }, {
            valuesss: '347',
            labelsss: '雷蛇',
          }, {
            valuesss: '348',
            labelsss: '罗技',
          }, {
            valuesss: '349',
            labelsss: '苹果',
          },

          {
            valuesss: '0',
            labelsss: '摄像头(外设产品)',
            disabled: true
          }, {
            valuesss: '341',
            labelsss: '联想',
          }, {
            valuesss: '342',
            labelsss: '中兴',
          },

          {
            valuesss: '0',
            labelsss: '手写板(外设产品)',
            disabled: true
          }, {
            valuesss: '350',
            labelsss: '联想',
          }, {
            valuesss: '351',
            labelsss: '华为',
          },
          {
            valuesss: '352',
            labelsss: '苹果',
          },

          {
            valuesss: '0',
            labelsss: '插座(外设产品)',
            disabled: true
          }, {
            valuesss: '353',
            labelsss: '联想',
          }, {
            valuesss: '354',
            labelsss: '中兴',
          }

        ],

        optionsss: [{
          valuess: '0',
          labelss: '手机',
          disabled: true
        }, {
          valuess: '1',
          labelss: '华为',
        }, {
          valuess: '2',
          labelss: '小米',
        }, {
          valuess: '3',
          labelss: '三星',
        }, {
          valuess: '4',
          labelss: 'OPPO',
        }, {
          valuess: '5',
          labelss: '苹果',
        }, {
          valuess: '6',
          labelss: 'vivo',
        }, {
          valuess: '10',
          labelss: 'MATE',
        }, {
          valuess: '11',
          labelss: '红米',
        }, {
          valuess: '12',
          labelss: '莫凡',
        },

          {
            valuess: '0',
            labelss: '电脑整机',
            disabled: true
          }, {
            valuess: '38',
            labelss: 'IBM',
          }, {
            valuess: '39',
            labelss: '苹果',
          }, {
            valuess: '40',
            labelss: '戴尔',
          }, {
            valuess: '41',
            labelss: '索尼',
          }, {
            valuess: '42',
            labelss: '联想',
          }, {
            valuess: '43',
            labelss: '华硕',
          }, {
            valuess: '44',
            labelss: '神舟',
          },

          {
            valuess: '0',
            labelss: '手机配件',
            disabled: true
          }, {
            valuess: '67',
            labelss: 'wisebrave',
          }, {
            valuess: '68',
            labelss: '埃普',
          }, {
            valuess: '69',
            labelss: 'venicen',
          }, {
            valuess: '70',
            labelss: '铁摩图',
          }, {
            valuess: '71',
            labelss: '华为',
          }, {
            valuess: '72',
            labelss: '小米',
          }, {
            valuess: '73',
            labelss: '三星',
          },
          {
            valuess: '74',
            labelss: 'OPPO',
          },
          {
            valuess: '75',
            labelss: '苹果',
          },
          {
            valuess: '76',
            labelss: 'vivo',
          },
          {
            valuess: '77',
            labelss: '红米',
          },
          {
            valuess: '78',
            labelss: 'MATE',
          },
          {
            valuess: '79',
            labelss: '莫凡',
          },
          {
            valuess: '107',
            labelss: '英悦',
          },
          {
            valuess: '108',
            labelss: '江铭',
          },
          {
            valuess: '109',
            labelss: '严谨',
          },
          {
            valuess: '110',
            labelss: '帆睿',
          },

          {
            valuess: '0',
            labelss: '电脑配件',
            disabled: true
          }, {
            valuess: '111',
            labelss: '三星',
          }, {
            valuess: '112',
            labelss: 'HKC',
          }, {
            valuess: '113',
            labelss: 'AOC AG272QCX',
          }, {
            valuess: '132',
            labelss: 'Intel',
          }, {
            valuess: '133',
            labelss: 'AMD',
          }, {
            valuess: '134',
            labelss: 'IBM',
          }, {
            valuess: '138',
            labelss: '华硕',
          },
          {
            valuess: '139',
            labelss: '技嘉',
          },
          {
            valuess: '140',
            labelss: '七彩虹',
          },
          {
            valuess: '146',
            labelss: '希捷',
          },
          {
            valuess: '147',
            labelss: '迈拓',
          },

          {
            valuess: '0',
            labelss: '摄影摄像',
            disabled: true
          }, {
            valuess: '151',
            labelss: '佳能',
          }, {
            valuess: '152',
            labelss: '尼康',
          }, {
            valuess: '153',
            labelss: '索尼',
          }, {
            valuess: '154',
            labelss: '富士',
          }, {
            valuess: '155',
            labelss: '三星',
          }, {
            valuess: '156',
            labelss: '宾得',
          },

          {
            valuess: '0',
            labelss: '数码配件',
            disabled: true
          }, {
            valuess: '172',
            labelss: '睿量',
          }, {
            valuess: '173',
            labelss: '威刚',
          }, {
            valuess: '174',
            labelss: '东芝',
          }, {
            valuess: '178',
            labelss: '捷信',
          }, {
            valuess: '179',
            labelss: '曼富图',
          }, {
            valuess: '182',
            labelss: '佳能',
          },
          {
            valuess: '183',
            labelss: '尼康',
          },
          {
            valuess: '184',
            labelss: '宾得',
          },
          {
            valuess: '188',
            labelss: 'Xbox微软',
          },
          {
            valuess: '189',
            labelss: 'logitech罗技',
          },
          {
            valuess: '190',
            labelss: 'BETOP北通',
          },

          {
            valuess: '0',
            labelss: '影音娱乐',
            disabled: true
          }, {
            valuess: '200',
            labelss: 'Nank南卡lite Pro',
          }, {
            valuess: '201',
            labelss: 'Apple AirPods pro',
          }, {
            valuess: '202',
            labelss: '1MORE ComfoBuds Pro',
          }, {
            valuess: '203',
            labelss: 'Hivi 惠威',
          }, {
            valuess: '207',
            labelss: '漫步者',
          }, {
            valuess: '210',
            labelss: '德生TECSUN',
          },
          {
            valuess: '211',
            labelss: '金业Goldyip',
          },
          {
            valuess: '212',
            labelss: '安键ANJAN',
          },

          {
            valuess: '0',
            labelss: '智能设备',
            disabled: true
          }, {
            valuess: '269',
            labelss: 'iWatch',
          }, {
            valuess: '270',
            labelss: '苹果',
          }, {
            valuess: '271',
            labelss: '艾玛酷',
          }, {
            valuess: '278',
            labelss: '安讯士',
          }, {
            valuess: '279',
            labelss: '韩华',
          }, {
            valuess: '280',
            labelss: '三星',
          },
          {
            valuess: '284',
            labelss: '索尼',
          },
          {
            valuess: '285',
            labelss: 'VIVE',
          },
          {
            valuess: '288',
            labelss: '能力风暴',
          },
          {
            valuess: '289',
            labelss: '安培',
          },

          {
            valuess: '0',
            labelss: '电子教育',
            disabled: true
          }, {
            valuess: '295',
            labelss: '外研通VIATON',
          }, {
            valuess: '296',
            labelss: '易读宝',
          }, {
            valuess: '297',
            labelss: '朗读者',
          }, {
            valuess: '304',
            labelss: '步步高',
          }, {
            valuess: '305',
            labelss: '读书郎',
          }, {
            valuess: '306',
            labelss: '苹果',
          },
          {
            valuess: '312',
            labelss: '诺亚舟',
          },
          {
            valuess: '313',
            labelss: '摩托罗拉',
          },
          {
            valuess: '314',
            labelss: '索尼',
          },

          {
            valuess: '0',
            labelss: '游戏设备',
            disabled: true
          }, {
            valuess: '228',
            labelss: '任天堂',
          }, {
            valuess: '229',
            labelss: '索尼',
          }, {
            valuess: '230',
            labelss: '微软',
          }, {
            valuess: '234',
            labelss: 'BETOP北通',
          }, {
            valuess: '235',
            labelss: 'Xbox微软',
          }, {
            valuess: '236',
            labelss: 'logitech罗技',
          },
          {
            valuess: '242',
            labelss: 'HTC',
          },
          {
            valuess: '243',
            labelss: 'Oculus',
          },

          {
            valuess: '0',
            labelss: '网络产品',
            disabled: true
          }, {
            valuess: '249',
            labelss: 'TPLINK',
          }, {
            valuess: '250',
            labelss: '腾达',
          }, {
            valuess: '251',
            labelss: '水星',
          }, {
            valuess: '255',
            labelss: '小米',
          }, {
            valuess: '256',
            labelss: '天猫魔盒',
          }, {
            valuess: '257',
            labelss: '华为',
          },
          {
            valuess: '261',
            labelss: '思科CISCO',
          },
          {
            valuess: '262',
            labelss: 'H3C',
          },

          {
            valuess: '0',
            labelss: '外设产品',
            disabled: true
          }, {
            valuess: '324',
            labelss: '罗技',
          }, {
            valuess: '325',
            labelss: '微软',
          }, {
            valuess: '326',
            labelss: '雷蛇',
          }, {
            valuess: '333',
            labelss: '金士顿',
          }, {
            valuess: '334',
            labelss: '闪迪',
          }, {
            valuess: '335',
            labelss: '东芝',
          },
          {
            valuess: '339',
            labelss: '联想',
          },
          {
            valuess: '340',
            labelss: '中兴',
          },
          {
            valuess: '343',
            labelss: '华为',
          },
          {
            valuess: '344',
            labelss: '苹果',
          },

        ],

        optionss: [{
          values: '1',
          labels: '手机',
        }, {
          values: '2',
          labels: '电脑整机',
        }, {
          values: '3',
          labels: '手机配件',
        }, {
          values: '4',
          labels: '电脑配件',
        }, {
          values: '5',
          labels: '摄影摄像',
        }, {
          values: '6',
          labels: '数码配件',
        }, {
          values: '7',
          labels: '影音娱乐',
        }, {
          values: '8',
          labels: '智能设备',
        }, {
          values: '9',
          labels: '电子教育',
        }, {
          values: '10',
          labels: '游戏设备',
        }, {
          values: '11',
          labels: '网络产品',
        }, {
          values: '12',
          labels: '外设产品',
        }

        ],

        options: [{
          value: '1',
          label: '手机',
          disabled: true

        }, {
          value: '100',
          label: '游戏手机'
        }, {
          value: '101',
          label: '5G手机'
        }, {
          value: '102',
          label: '拍照手机'
        }, {
          value: '103',
          label: '音乐手机'
        }, {
          value: '104',
          label: '老人手机'
        }, {
          value: '105',
          label: '商务手机'
        }, {
          value: '106',
          label: '4G手机'
        }, {
          value: '2',
          label: '电脑整机',
          disabled: true
        }, {
          value: '110',
          label: '办公本'
        }, {
          value: '111',
          label: '游戏本'
        }, {
          value: '112',
          label: '台式机'
        }, {
          value: '113',
          label: '平板电脑'
        }, {
          value: '114',
          label: '一体机'
        }, {
          value: '3',
          label: '手机配件',
          disabled: true
        }, {
          value: '120',
          label: '手机壳'
        }, {
          value: '121',
          label: '手机膜'
        }, {
          value: '122',
          label: '数据线'
        }, {
          value: '123',
          label: '充电器'
        }, {
          value: '124',
          label: '机饰品'
        }, {
          value: '125',
          label: '手机支架'
        }, {
          value: '4',
          label: '电脑配件',
          disabled: true
        }, {
          value: '130',
          label: '显示器'
        }, {
          value: '131',
          label: 'CPU'
        }, {
          value: '132',
          label: '主板'
        }, {
          value: '133',
          label: '显卡'
        }, {
          value: '134',
          label: '硬盘'
        }, {
          value: '135',
          label: '机箱'
        }, {
          value: '136',
          label: '散热器'
        }, {
          value: '137',
          label: '电源'
        }, {
          value: '5',
          label: '摄影摄像',
          disabled: true
        }, {
          value: '140',
          label: '数码相机'
        }, {
          value: '141',
          label: '微单相机'
        }, {
          value: '142',
          label: '单反相机'
        }, {
          value: '143',
          label: '拍立得'
        }, {
          value: '144',
          label: '摄像机'
        }, {
          value: '145',
          label: '运动相机'
        }
          , {
            value: '6',
            label: '数码配件',
            disabled: true
          }
          , {
            value: '150',
            label: '储存卡'
          }, {
            value: '151',
            label: '三脚架'
          }, {
            value: '152',
            label: '相机包'
          }, {
            value: '153',
            label: '滤镜'
          }, {
            value: '154',
            label: '手柄'
          }, {
            value: '155',
            label: '读卡器'
          }, {
            value: '156',
            label: '镜头'
          }, {
            value: '7',
            label: '影音娱乐',
            disabled: true
          }, {
            value: '160',
            label: '耳机'
          }, {
            value: '161',
            label: '音响'
          }, {
            value: '162',
            label: '收音机'
          }, {
            value: '163',
            label: '麦克风'
          }, {
            value: '164',
            label: 'MP3'
          }, {
            value: '165',
            label: 'MP4'
          }, {
            value: '166',
            label: '音频线'
          }, {
            value: '8',
            label: '智能设备',
            disabled: true
          }, {
            value: '170',
            label: '智能手表'
          }, {
            value: '171',
            label: '智能手环'
          }, {
            value: '172',
            label: '监控摄像'
          }, {
            value: '173',
            label: '智能眼镜'
          }, {
            value: '174',
            label: '健康监测'
          }, {
            value: '175',
            label: '无人机'
          }, {
            value: '176',
            label: '智能机器人'
          }, {
            value: '9',
            label: '电子教育',
            disabled: true
          }, {
            value: '180',
            label: '点读机'
          }, {
            value: '181',
            label: '学生平板'
          }, {
            value: '182',
            label: '录音笔'
          }, {
            value: '183',
            label: '电子书'
          }, {
            value: '184',
            label: '电子词典'
          }, {
            value: '185',
            label: '复读机'
          }, {
            value: '186',
            label: '翻译机'
          }, {
            value: '10',
            label: '游戏设备',
            disabled: true
          }
          , {
            value: '190',
            label: '游戏机'
          }, {
            value: '191',
            label: '游戏手柄'
          }, {
            value: '192',
            label: '游戏软件'
          }, {
            value: '193',
            label: 'VR眼镜'
          }, {
            value: '194',
            label: '游戏耳机'
          }
          , {
            value: '11',
            label: '网络产品',
            disabled: true
          }, {
            value: '200',
            label: '路由器'
          }, {
            value: '201',
            label: '机顶盒'
          }, {
            value: '202',
            label: '交换机'
          }, {
            value: '203',
            label: '网卡'
          }, {
            value: '204',
            label: '网线'
          }, {
            value: '12',
            label: '外设产品',
            disabled: true
          }, {
            value: '210',
            label: '鼠标'
          }, {
            value: '211',
            label: '键盘'
          }, {
            value: '212',
            label: 'U盘'
          }, {
            value: '213',
            label: '移动硬盘'
          }, {
            value: '214',
            label: '鼠标垫'
          }, {
            value: '215',
            label: '摄像头'
          }, {
            value: '216',
            label: '手写板'
          }, {
            value: '217',
            label: '插座'
          }

        ],
        value: '',
        dialogImageUrl: '',
        dialogVisible: false,
        disabled: false,
        admin: {
          name: '',
          sale: '',
          icon: '',
        },
        rules: {
          descript: [
            {required: true, message: '商品描述', trigger: 'blur'},
          ],
          weight: [
            {required: true, message: '商品重量', trigger: 'blur'},
          ],
          productPrice: [
            {required: true, message: '商品价格', trigger: 'blur'},
          ],
          productImg: [
            {required: true, message: '商品描述图片4', trigger: 'blur'},
          ],
          productImf: [
            {required: true, message: '商品描述图片3', trigger: 'blur'},
          ],
          productImd: [
            {required: true, message: '商品描述图片2', trigger: 'blur'},
          ],
          productIm: [
            {required: true, message: '商品描述图片1', trigger: 'blur'},
          ],
          // productCg :[
          //   { required: true, message: "商品颜色4", trigger: "blur" },
          //   ],
          // productCf: [
          //   { required: true, message: "商品颜色3", trigger: "blur" },
          //   ],
          // productCd :[
          //   { required: true, message: "商品颜色2", trigger: "blur" },
          //   ],
          productCs: [
            {required: true, message: '商品颜色1', trigger: 'blur'},
          ],
          productImage: [
            {required: true, message: '商品图片', trigger: 'blur'},
          ],
          productMnum: [
            {required: true, message: '商品最大数量', trigger: 'blur'},
          ],
          productName: [
            {required: true, message: '商品名称', trigger: 'blur'},
          ],
          productMd: [
            {required: true, message: '商品规格图片1', trigger: 'blur'},
          ],
          productMf: [
            {required: true, message: '商品规格图片2', trigger: 'blur'},
          ],
          productMg: [
            {required: true, message: '商品规格图片3', trigger: 'blur'},
          ],
          productErm: [
            {required: true, message: '卖家二维码', trigger: 'blur'},
          ],
          oneCategoryId: [
            {required: true, message: '商品一级分类', trigger: 'blur'},
          ],
          twoCategoryId: [
            {required: true, message: '商品二级分类', trigger: 'blur'},
          ],
          brandId: [
            {required: true, message: '商品品牌', trigger: 'blur'},
          ],
          threeCategoryId: [
            {required: true, message: '商品类型品牌', trigger: 'blur'},
          ],

        },

      };
    },

    methods: {
      filesUplodeSeccess (res) {
        console.log(res);
        this.admin.productImage = res.data;

      },
      filesUplodeSeccessd (res) {
        console.log(res);
        this.admin.productIm = res.data;

      },
      filesUplodeSeccessf (res) {
        console.log(res);
        this.admin.productImd = res.data;

      },
      filesUplodeSeccessg (res) {
        console.log(res);
        this.admin.productImf = res.data;

      },
      filesUplodeSeccessh (res) {
        console.log(res);
        this.admin.productImg = res.data;

      },
      filesUplodeSeccesse (res) {
        console.log(res);
        this.admin.productMd = res.data;

      },
      filesUplodeSeccessr (res) {
        console.log(res);
        this.admin.productMf = res.data;

      },
      filesUplodeSeccesst (res) {
        console.log(res);
        this.admin.productMg = res.data;

      },
      filesUplodeSeccessy (res) {
        console.log(res);
        this.admin.productErm = res.data;

      },

      handleRemove (file) {
        console.log(file);
      },
      handlePictureCardPreview (file) {
        this.dialogImageUrl = file.url;
        this.dialogVisible = true;
      },
      handleDownload (file) {
        console.log(file);
      },
      onSubmit (formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            let _this = this;
            axios
              .post('http://localhost:8888/info/add', this.admin)
              .then(function (response) {
                if (response.data) {
                  _this.$alert(_this.admin.productName + '添加成功！', '添加数据', {
                    confirmButtonText: '确定',
                    callback: (action) => {
                      //跳转到/table
                      _this.$router.push('/Index');
                    },
                  });
                }
              });
          }
        });
      },

    },
  };
</script>

<style scoped>
  .ew {

    /* box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04); */
    box-shadow: 0 4px 8px rgba(0, 0, 0, .22), 0 0 12px rgba(0, 0, 0, .14);
    width: 1000px;
    height: 2595px;
    padding-left: 4px;
    padding-top: 4px;
    padding-right: 4px;
    border-radius: 30px;

    margin-left: 400px;
  }

  .eww {

    width: 100%;
    height: 3480px;
    background: rgb(245, 237, 227);


  }

  .ww {

    padding-top: 50px;
  }

  .gg {

    padding-left: 74px;
    padding-top: 74px;
    padding-right: 74px;

    /* background-image: url('../assets/ju.png'); */
    background: rgb(209, 235, 231);

  }

  .hh {

    background: white;
    border-radius: 30px
  }

  .jj {
    padding-left: 104px;
    padding-top: 94px;
    padding-right: 94px;
    padding-bottom: 324px;
  }

  #app {
    height: 100%;
  }

  .yy {

    height: 100%;
    width: 100%;
    border-radius: 50%;
    font-size: 13px;
    background-color: #f2f5f6;
    box-shadow: 0 0 6px rgba(0, 0, 0, .12);
    text-align: center;

    color: #1989fa;
    padding: 4px;

  }
</style>
