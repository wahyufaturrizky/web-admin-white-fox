import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import {
	DropboxOutlined,
	FileImageOutlined,
	FileProtectOutlined,
	StarOutlined,
	UserAddOutlined,
} from '@ant-design/icons';
import {
	Col,
	Divider,
	Layout,
	Progress,
	Row,
	Select,
	Typography,
	Table,
	Tag,
	Space,
} from 'antd';
import React from 'react';
import { Cell, Pie, PieChart } from 'recharts';

const { Title } = Typography;
const { Option } = Select;
const { Content } = Layout;

const Dashboard = (props) => {
	const columns = [
		{
			title: 'Name',
			dataIndex: 'name',
			key: 'name',
			render: (text) => (
				<a
					href='https://www.nabatisnack.co.id/'
					target='_blank'
					rel='noreferrer'>
					{text}
				</a>
			),
		},
		{
			title: 'Age',
			dataIndex: 'age',
			key: 'age',
		},
		{
			title: 'Address',
			dataIndex: 'address',
			key: 'address',
		},
		{
			title: 'Tags',
			key: 'tags',
			dataIndex: 'tags',
			render: (tags) => (
				<>
					{tags.map((tag) => {
						let color = tag.length > 5 ? 'geekblue' : 'green';
						if (tag === 'loser') {
							color = 'volcano';
						}
						return (
							<Tag color={color} key={tag}>
								{tag.toUpperCase()}
							</Tag>
						);
					})}
				</>
			),
		},
		{
			title: 'Action',
			key: 'action',
			render: (text, record) => (
				<Space size='middle'>
					<a
						href='https://www.nabatisnack.co.id/'
						target='_blank'
						rel='noreferrer'>
						Invite {record.name}
					</a>
					<a
						href='https://www.nabatisnack.co.id/'
						target='_blank'
						rel='noreferrer'>
						Delete
					</a>
				</Space>
			),
		},
	];

	const dataTable = [
		{
			key: '1',
			name: 'John Brown',
			age: 32,
			address: 'New York No. 1 Lake Park',
			tags: ['nice', 'developer'],
		},
		{
			key: '2',
			name: 'Jim Green',
			age: 42,
			address: 'London No. 1 Lake Park',
			tags: ['loser'],
		},
		{
			key: '3',
			name: 'Joe Black',
			age: 32,
			address: 'Sidney No. 1 Lake Park',
			tags: ['cool', 'teacher'],
		},
	];

	const data = [
		{ name: 'Group A', value: 400 },
		{ name: 'Group B', value: 300 },
		{ name: 'Group C', value: 300 },
		{ name: 'Group D', value: 200 },
	];
	const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];
	const listCard = [
		{
			total: 14,
			title: 'Total Policies',
			nameIcon: 'FileProtectOutlined',
			backgroundColor: '#08979c',
		},
		{
			total: 3,
			title: 'Total Unassigned Assets',
			nameIcon: 'FileImageOutlined',
			backgroundColor: '#d48806',
		},
		{
			total: 53,
			title: 'Total Users',
			nameIcon: 'UserAddOutlined',
			backgroundColor: '#531dab',
		},
		{
			total: 1334,
			title: 'Total Assets',
			nameIcon: 'DropboxOutlined',
			backgroundColor: '#1d39c4',
		},
		{
			total: 17,
			title: 'Total Audited Assets',
			nameIcon: 'StarOutlined',
			backgroundColor: '#389e0d',
		},
	];

	const listAssetCategory = [
		{
			percentage: 40,
			total: 10,
			name: 'WiFi',
		},
		{
			percentage: 70,
			total: 10,
			name: 'WiFi',
		},
		{
			percentage: 100,
			total: 10,
			name: 'WiFi',
		},
	];
	return (
		<Content
			className='site-layout-background'
			style={{ margin: '24px 16px', padding: 24, textAlign: 'center' }}>
			<Row gutter={[24, 24]}>
				{listCard.map((data, index) => {
					const { title, nameIcon, backgroundColor } = data;
					return (
						<Col key={index} xs={{ span: 24 }} lg={{ span: 8 }}>
							<div
								style={{
									borderRadius: 10,
									backgroundColor: backgroundColor,
									height: 100,
								}}>
								<div style={{ textAlign: 'left', padding: 18 }}>
									<Row>
										<Col>
											<div
												style={{
													borderRadius: '100%',
													padding: 8,
													backgroundColor: 'rgba(255, 255, 255, 0.2)',
												}}>
												{nameIcon === 'FileProtectOutlined' ? (
													<FileProtectOutlined
														style={{ color: 'white', fontSize: 24 }}
													/>
												) : nameIcon === 'FileImageOutlined' ? (
													<FileImageOutlined
														style={{ color: 'white', fontSize: 24 }}
													/>
												) : nameIcon === 'UserAddOutlined' ? (
													<UserAddOutlined
														style={{ color: 'white', fontSize: 24 }}
													/>
												) : nameIcon === 'DropboxOutlined' ? (
													<DropboxOutlined
														style={{ color: 'white', fontSize: 24 }}
													/>
												) : nameIcon === 'DropboxOutlined' ? (
													<DropboxOutlined
														style={{ color: 'white', fontSize: 24 }}
													/>
												) : nameIcon === 'StarOutlined' ? (
													<StarOutlined
														style={{ color: 'white', fontSize: 24 }}
													/>
												) : null}
											</div>
										</Col>
										<Col style={{ marginLeft: 12 }}>
											<p style={{ color: 'white', margin: 0 }}>{title}</p>
											<p
												style={{
													color: 'white',
													fontWeight: 'bold',
													fontSize: 24,
												}}>
												14
											</p>
										</Col>
									</Row>
								</div>
							</div>
						</Col>
					);
				})}
			</Row>

			<Row style={{ marginTop: 16 }} gutter={[24, 24]}>
				<Col xs={{ span: 24 }} lg={{ span: 24 }}>
					<FullCalendar plugins={[dayGridPlugin]} initialView='dayGridMonth' />
				</Col>
			</Row>

			<Row style={{ marginTop: 16 }} gutter={[24, 24]}>
				<Col xs={{ span: 24 }} lg={{ span: 12 }}>
					<div
						style={{
							borderRadius: 10,
							backgroundColor: 'white',
							border: '2px solid #d9d9d9',
							padding: 18,
							height: 350,
						}}>
						<Row justify='space-between'>
							<Col>
								<Title style={{ color: '#595959' }} level={5}>
									Asset Category by Audit Status
								</Title>
							</Col>
							<Col>
								<Select defaultValue='Show data' style={{ width: 120 }}>
									<Option value='Show data'>Show data</Option>
									<Option value='test'>test</Option>
								</Select>
							</Col>
						</Row>

						<Divider style={{ borderColor: '#d9d9d9' }} />

						{listAssetCategory.map((data, index) => {
							const { percentage, total, name } = data;
							return (
								<div style={{ marginBottom: 12 }} key={index}>
									<Row justify='space-between'>
										<Col>
											<p style={{ color: '#595959', margin: 0 }}>{name}</p>
										</Col>
										<Col>
											<p style={{ color: '#595959', margin: 0 }}>{total}</p>
										</Col>
									</Row>
									<Progress percent={percentage} size='small' />
								</div>
							);
						})}
					</div>
				</Col>
				<Col xs={{ span: 24 }} lg={{ span: 12 }}>
					<div
						style={{
							borderRadius: 10,
							backgroundColor: 'white',
							border: '2px solid #d9d9d9',
							padding: 18,
							height: 350,
						}}>
						<Row>
							<Col>
								<Title style={{ color: '#595959' }} level={5}>
									Insurance Claim by Status
								</Title>
							</Col>
						</Row>

						<Divider style={{ borderColor: '#d9d9d9' }} />

						<div style={{ justifyContent: 'center', display: 'inline-block' }}>
							<PieChart width={400} height={180}>
								<Pie
									data={data}
									cx={200}
									cy={80}
									innerRadius={60}
									outerRadius={80}
									fill='#8884d8'
									paddingAngle={5}
									dataKey='value'>
									{data.map((entry, index) => (
										<Cell
											key={`cell-${index}`}
											fill={COLORS[index % COLORS.length]}
										/>
									))}
								</Pie>
							</PieChart>
							<Title style={{ color: '#595959' }} level={5}>
								Ready for approval
							</Title>
						</div>
					</div>
				</Col>
			</Row>

			<Row style={{ marginTop: 16 }} gutter={[24, 24]}>
				<Col xs={{ span: 24 }} lg={{ span: 24 }}>
					<div
						style={{
							borderRadius: 10,
							backgroundColor: 'white',
							border: '2px solid #d9d9d9',
							padding: 18,
						}}>
						<Table columns={columns} dataSource={dataTable} />
					</div>
				</Col>
			</Row>
		</Content>
	);
};

export default Dashboard;
