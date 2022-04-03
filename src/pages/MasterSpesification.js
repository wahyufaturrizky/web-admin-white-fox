/* eslint-disable react-hooks/exhaustive-deps */
import {
  DeleteOutlined,
  EditOutlined,
  FileAddOutlined,
  UnorderedListOutlined,
} from "@ant-design/icons";
import {
  Button,
  Col,
  Form,
  Input,
  Layout,
  Modal,
  Row,
  Select,
  Space,
  Table,
  Typography,
} from "antd";
import moment from "moment";
import React, { useState } from "react";
import { ColorBaseEnum } from "../styles/Colors";
import { MarginEnum } from "../styles/Spacer";

const { Content } = Layout;
const { Title, Text } = Typography;
const { Option } = Select;

const formItemLayout = {
  labelCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 8,
    },
  },
  wrapperCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 16,
    },
  },
};

const MasterSpesification = (props) => {
  const [contextHolder] = Modal.useModal();
  const [form] = Form.useForm();
  const [dataListMasterSpec] = useState([]);
  const [paginationPopUpNotif] = useState({
    current: 1,
    pageSize: 5,
  });
  const [paginationMasterSpec] = useState({
    current: 1,
    pageSize: 10,
  });
  const [dataListMasterMaterialGroup] = useState([]);
  const [fields, setFields] = useState([]);
  const [dataPriority] = useState(null);
  const [isModalActionVisible, setIsModalActionVisible] = useState({
    dataRow: null,
    typeAction: "",
    isShowModalAction: false,
  });
  const [isModalStateNotif, setIsModalStateNotif] = useState({
    titleNotif: "Notification",
    dataList: [],
    isShowModalNotif: false,
    headerTableContent: "",
  });
  const { titleNotif, dataList, isShowModalNotif, headerTableContent } =
    isModalStateNotif;
  const [isLoading] = useState(false);
  const [setIsShowPopUp] = useState(props.location.state?.isShowPopNotif);
  const { isShowModalAction, typeAction, dataRow } = isModalActionVisible;

  const columnsTable = [
    {
      title: "No",
      dataIndex: "material_group",
      key: "material_group",
      render: (text, rowData, index) => <p>{index + 1}</p>,
    },
    {
      title: "Material Group",
      dataIndex: "material_group",
      key: "material_group",
      render: (text) => <p>{text}</p>,
    },
    {
      title: "Material Group Description",
      dataIndex: "material_group_description",
      key: "material_group_description",
      render: (text) => <p>{text}</p>,
    },
    {
      title: "Priority ID",
      dataIndex: "priority_id",
      key: "priority_id",
      render: (text) => <p>{dataPriority && dataPriority[text]}</p>,
    },
    {
      title: "ID",
      dataIndex: "id",
      key: "id",
      render: (text) => <p>{text}</p>,
    },
    {
      title: "Created at",
      dataIndex: "created_at",
      key: "created_at",
      render: (text) => <p>{moment(text).format("DD-MM-YYYY")}</p>,
    },
    {
      title: "Update at",
      dataIndex: "updated_at",
      key: "updated_at",
      render: (text) => <p>{moment(text).format("DD-MM-YYYY")}</p>,
    },
    {
      title: "Action",
      key: "action",
      render: (text, record) => {
        return (
          <Space size="middle">
            <Button
              onClick={() => {
                if (record.material_group_description === "Carton Box") {
                  props.history.push(
                    "/master-specification-cartoon-box",
                    record
                  );
                } else {
                  props.history.push("/master-specification-item", record);
                }
              }}
              type="primary"
              icon={<UnorderedListOutlined />}
            >
              List
            </Button>
            <Button
              onClick={() => {
                const tempMaterialGroup = dataListMasterMaterialGroup.find(
                  (finding) =>
                    finding.description === record.material_group_description
                );
                setFields([
                  {
                    name: ["material_group"],
                    value: tempMaterialGroup?.id,
                  },
                  {
                    name: ["material_group_description"],
                    value: record.material_group_description,
                  },
                  {
                    name: ["priority_id"],
                    value: record.priority_id.toString(),
                  },
                ]);
                setIsModalActionVisible({
                  isShowModalAction: true,
                  dataRow: record,
                  typeAction: "EDIT",
                });
              }}
              type="default"
              icon={<EditOutlined />}
            >
              Edit
            </Button>
            {!(
              record?.material_group_description === "Roll Film" ||
              record?.material_group_description === "Carton Box" ||
              record?.material_group_description === "PP"
            ) && (
              <Button
                onClick={() =>
                  setIsModalActionVisible({
                    ...isModalActionVisible,
                    isShowModalAction: true,
                    dataRow: record,
                    typeAction: "DELETE",
                  })
                }
                type="danger"
                icon={<DeleteOutlined />}
              >
                Delete
              </Button>
            )}
          </Space>
        );
      },
    },
  ];

  const columnsPopNotifTable = [
    {
      title: "No",
      dataIndex: "id",
      key: "id",
      render: (text, rowData, index) => <p>{index + 1}</p>,
    },
    {
      title: "Vendor",
      dataIndex: "vendor",
      key: "vendor",
      render: (text) => <p>{text}</p>,
    },
    {
      title: "Vendor Name",
      dataIndex: "vendor_name",
      key: "vendor_name",
      render: (text) => <p>{text}</p>,
    },
    {
      title: "Material Number",
      dataIndex: "material_number",
      key: "material_number",
      render: (text) => <p>{text}</p>,
    },
    {
      title: "Material Desc.",
      dataIndex: "material_description",
      key: "material_description",
      render: (text) => <p>{text}</p>,
    },
    {
      title: "Sample PO",
      dataIndex: "sample_po",
      key: "sample_po",
      render: (text) => <p>{text}</p>,
    },
    {
      title: "Submit Date",
      dataIndex: "submit_date",
      key: "submit_date",
      render: (text) => <p>{moment(text).format("DD-MM-YYYY")}</p>,
    },
  ];

  return (
    <Content style={{ margin: "24px 16px 0", overflow: "initial" }}>
      <Title level={4}>Plan</Title>
      <div className="site-layout-background" style={{ padding: 24 }}>
        <Row
          justify="space-between"
          style={{
            marginBottom: 12,
          }}
        >
          <Button
            onClick={() =>
              setIsModalActionVisible({
                ...isModalActionVisible,
                typeAction: "ADD",
                isShowModalAction: true,
              })
            }
            style={{
              backgroundColor: ColorBaseEnum.black,
              border: `1px solid ${ColorBaseEnum.black}`,
            }}
            type="primary"
            icon={<FileAddOutlined />}
          >
            Add
          </Button>
          <Input.Search
            placeholder="must enter the full name for the material group desc."
            allowClear
            oncle
            style={{ width: "40%" }}
          />
        </Row>
        <Table
          pagination={paginationMasterSpec}
          loading={isLoading}
          bordered
          size="small"
          rowClassName={(record, index) => {
            if (index % 2 === 1) {
              return "color-gray-2";
            } else {
              return "color-gray-1";
            }
          }}
          columns={columnsTable.filter((col) => col.dataIndex !== "id")}
          dataSource={dataListMasterSpec}
        />
      </div>

      <Modal
        title={typeAction}
        forceRender={false}
        visible={isShowModalAction}
        width={["ADD", "EDIT"].includes(typeAction) ? 1000 : undefined}
        afterClose={() => form.resetFields()}
        onCancel={() => {
          form.resetFields();
          setIsModalActionVisible({
            ...isModalActionVisible,
            isShowModalAction: false,
          });
        }}
        footer={
          typeAction === "DELETE"
            ? [
                <Button
                  key="back"
                  onClick={() => {
                    form.resetFields();
                    setIsModalActionVisible({
                      ...isModalActionVisible,
                      isShowModalAction: false,
                    });
                  }}
                >
                  Cancel
                </Button>,
                <Button loading={isLoading} type="danger" key="delete">
                  Yes, I am sure
                </Button>,
              ]
            : null
        }
      >
        {typeAction === "VIEW" ? (
          dataRow &&
          Object.keys(dataRow).map((data, index) => {
            return (
              <p key={index} style={{ fontWeight: "bold", color: "#595959" }}>
                {data.replace("_", " ")} :{" "}
                <span style={{ fontWeight: "normal" }}>
                  {data === "created_at" || data === "updated_at"
                    ? moment(dataRow[data]).format("DD-MM-YYYY")
                    : dataRow[data]}
                </span>
              </p>
            );
          })
        ) : typeAction === "EDIT" ? (
          <Form
            {...formItemLayout}
            form={form}
            name="add"
            fields={fields}
            onFieldsChange={(_, allFields) => setFields(allFields)}
            scrollToFirstError
          >
            <Row>
              <Col lg={12} md={24}>
                <Form.Item
                  name="material_group"
                  label="Material Group"
                  rules={[
                    {
                      required: true,
                      message: "Please input material group!",
                    },
                  ]}
                  hasFeedback
                >
                  <Select
                    showSearch
                    loading={isLoading}
                    placeholder="Input min. 4 char"
                    optionFilterProp="children"
                    filterOption={(input, option) =>
                      option.children
                        .toLowerCase()
                        .indexOf(input.toLowerCase()) >= 0
                    }
                  >
                    {dataListMasterMaterialGroup &&
                      dataListMasterMaterialGroup.map((data, index) => {
                        const { description, id } = data;
                        return (
                          <Option key={index} value={id}>
                            {`${id} ${description}`}
                          </Option>
                        );
                      })}
                  </Select>
                </Form.Item>
              </Col>
              <Col lg={12} md={24}>
                <Form.Item
                  name="priority_id"
                  label="Priority"
                  rules={[
                    {
                      required: true,
                      message: "Please input Priority!",
                    },
                  ]}
                  hasFeedback
                >
                  <Select
                    loading={isLoading}
                    placeholder="select your Priority"
                  >
                    {dataPriority &&
                      Object.keys(dataPriority).map((data, index) => {
                        return (
                          <Option key={index} value={data}>
                            {dataPriority[data]}
                          </Option>
                        );
                      })}
                  </Select>
                </Form.Item>
              </Col>
            </Row>
            <div style={{ justifyContent: "flex-end", display: "flex" }}>
              <Form.Item>
                <Button loading={isLoading} type="primary" htmlType="submit">
                  Save
                </Button>
              </Form.Item>
            </div>
          </Form>
        ) : typeAction === "ADD" ? (
          <Form
            {...formItemLayout}
            form={form}
            name="addMasterSpec"
            scrollToFirstError
          >
            <Row>
              <Col lg={12} md={24}>
                <Form.Item
                  name="material_group"
                  label="Material Group"
                  rules={[
                    {
                      required: true,
                      message: "Please input material group!",
                    },
                  ]}
                  hasFeedback
                >
                  <Select
                    showSearch
                    loading={isLoading}
                    placeholder="Input min. 4 char"
                    optionFilterProp="children"
                    filterOption={(input, option) =>
                      option.children
                        .toLowerCase()
                        .indexOf(input.toLowerCase()) >= 0
                    }
                  >
                    {dataListMasterMaterialGroup &&
                      dataListMasterMaterialGroup.map((data, index) => {
                        const { description, id } = data;
                        return (
                          <Option key={index} value={id}>
                            {`${id} ${description}`}
                          </Option>
                        );
                      })}
                  </Select>
                </Form.Item>
              </Col>
              <Col lg={12} md={24}>
                <Form.Item
                  name="priority_id"
                  label="Priority"
                  rules={[
                    {
                      required: true,
                      message: "Please input Priority!",
                    },
                  ]}
                  hasFeedback
                >
                  <Select
                    loading={isLoading}
                    placeholder="select your Priority"
                  >
                    {dataPriority &&
                      Object.keys(dataPriority).map((data, index) => {
                        return (
                          <Option key={index} value={data}>
                            {dataPriority[data]}
                          </Option>
                        );
                      })}
                  </Select>
                </Form.Item>
              </Col>
            </Row>

            <div style={{ justifyContent: "flex-end", display: "flex" }}>
              <Form.Item>
                <Button
                  style={{
                    backgroundColor: ColorBaseEnum.black,
                    border: `1px solid ${ColorBaseEnum.black}`,
                  }}
                  loading={isLoading}
                  type="primary"
                  htmlType="submit"
                >
                  Create
                </Button>
              </Form.Item>
            </div>
          </Form>
        ) : (
          <p>
            Do you want to delete this data{" "}
            <b>{dataRow?.material_group_description}</b> ?
          </p>
        )}
      </Modal>

      <Modal
        title={titleNotif}
        forceRender={false}
        visible={isShowModalNotif}
        width={1000}
        afterClose={() => setIsShowPopUp(false)}
        onCancel={() => {
          setIsShowPopUp(false);
          setIsModalStateNotif({
            ...isModalStateNotif,
            isShowModalNotif: false,
          });
        }}
        footer={[
          <Button
            key="back"
            onClick={() => {
              setIsShowPopUp(false);
              setIsModalStateNotif({
                ...isModalStateNotif,
                isShowModalNotif: false,
              });
            }}
          >
            Cancel
          </Button>,
        ]}
      >
        <div style={{ marginBottom: MarginEnum["2x"] }}>
          <Text>{headerTableContent}</Text>
        </div>
        <Table
          pagination={paginationPopUpNotif}
          loading={isLoading}
          bordered
          size="small"
          rowClassName={(record, index) => {
            if (index % 2 === 1) {
              return "color-gray-2";
            } else {
              return "color-gray-1";
            }
          }}
          columns={columnsPopNotifTable.filter(
            (col) => col.dataIndex !== "submit_date"
          )}
          dataSource={dataList}
        />
      </Modal>
      {contextHolder}
    </Content>
  );
};

export default MasterSpesification;
