import React from 'react'
import TestimonialSlider from '../component/TestimonialSlider'
import HeroSlider from '../component/HeroSlider'
import TaskSection from '../component/TaskSection'
import { useLoaderData } from 'react-router'
import Workflow from '../component/WorkFlow'
import useTitle from '../utils/useTitle'

export default function Home() {
  useTitle('Home')
  const tasks = useLoaderData()
  return (
    <>
        <HeroSlider></HeroSlider>
        <TaskSection tasks={tasks}></TaskSection>
        <Workflow></Workflow>
        <TestimonialSlider></TestimonialSlider>
    </>
  )
}
