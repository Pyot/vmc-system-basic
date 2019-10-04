import React, { useState } from 'react';
import { v4 } from 'uuid';
import moment from 'moment';
import { Button, Form, FormGroup, Label, Input, Col, Row } from 'reactstrap';

const TaskFormContainer = props => {
	const { tasks, setTasks } = props;

	const [task, setTask] = useState({
		title: '',
		description: '',
		reporter: '',
		phone: '',
		email: '',
		area: '',
		tools: '',
		comments: [],
		coordinator: '',
		id: v4(),
		date: '',
		department: ''
	});

	const updateTask = ({ ...task }, e) => {
		task[e.target.id] = e.target.value;
		task.date = moment().format('D-M-YYYY');
		setTask(task);
	};

	const addTask = ({ ...task }, [...tasks]) => {
		tasks.push(task);
		setTasks(tasks);
		setTask({
			title: '',
			description: '',
			reporter: '',
			phone: '',
			email: '',
			area: '',
			tools: '',
			comments: [],
			coordinator: '',
			id: v4(),
			date: '',
			department: ''
		});
	};

	return (
		<div className="container mt-5">
			<h1 className="page-title">Add Task</h1>
			<p className="page-help-text">
				If you would like inform about any broken element or work to do. Please
				fill the form.
			</p>
			<React.Fragment>
				<Form>
					<FormGroup />

					<Row form>
						<Col md={8}>
							<FormGroup>
								<Label for="title">Title</Label>
								<Input
									type="text"
									name="email"
									id="title"
									onChange={updateTask.bind(this, task)}
									placeholder="Provide task title"
									value={task.title}
								/>
							</FormGroup>
						</Col>
						<Col md={4}>
							<FormGroup>
								<Label for="area">Area</Label>
								<Input
									type="text"
									name="area"
									id="area"
									onChange={updateTask.bind(this, task)}
									placeholder="room number, building number, location ect."
									value={task.area}
								/>
							</FormGroup>
						</Col>
					</Row>
					<Row form>
						<Col md={4}>
							<FormGroup>
								<Label for="reporter">Name</Label>
								<Input
									type="text"
									name="email"
									id="reporter"
									onChange={updateTask.bind(this, task)}
									placeholder="Your name"
									value={task.name}
								/>
							</FormGroup>
						</Col>
						<Col md={4}>
							<FormGroup>
								<Label for="email">Email</Label>
								<Input
									type="email"
									name="email"
									id="email"
									onChange={updateTask.bind(this, task)}
									placeholder="your@email.com"
									value={task.email}
								/>
							</FormGroup>
						</Col>
						<Col md={4}>
							<FormGroup>
								<Label for="phone">Phone</Label>
								<Input
									type="number"
									name="email"
									id="phone"
									onChange={updateTask.bind(this, task)}
									placeholder="+48 777-777-777"
									value={task.phone}
								/>
							</FormGroup>
						</Col>
					</Row>
					<FormGroup>
						<Label for="description">Description</Label>
						<Input
							type="textarea"
							rows={10}
							name="text"
							id="description"
							onChange={updateTask.bind(this, task)}
							placeholder={
								'Please provide short description. Example: Broken handle in dinning room'
							}
							value={task.description}
						/>
					</FormGroup>

					<Button onClick={addTask.bind(this, task, tasks)}>Add Task</Button>
				</Form>
			</React.Fragment>
		</div>
	);
};

export default TaskFormContainer;
