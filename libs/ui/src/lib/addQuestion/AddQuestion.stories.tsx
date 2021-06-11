import React, { useState, useEffect, useCallback, FC } from 'react'
import AddQuestion, { QuestionField, AddQuestionProps } from './AddQuestion'
import { IQuestionOptions } from '../questionBank/QuestionBank'
import {
  title,
  description,
  questions,
  addQuestionLabel,
  goToButtonLabel,
  questionLabel,
} from './mock'

export default {
  component: AddQuestion,
  title: 'UI/AddQuestion',
  args: {
    description,
    questions,
    title,
    addQuestionLabel,
    goToButtonLabel,
    questionLabel,
  },
  argTypes: {
    description: { control: { type: 'text' } },
    questions: { control: { type: 'object' } },
  },
  onChange: { action: 'onChange' },
}

export const AddQuestionStory: FC<AddQuestionProps> = ({
  description,
  questions,
  title,
  addQuestionLabel,
  goToButtonLabel,
  questionLabel,
}) => {
  const [question, setQuestions] = useState<QuestionField[]>([])
  const [isDeleteDisable, setDeleteDisable] = useState<boolean>(false)

  const onChange = (value: string, index: number) => {
    const temporaryQuestions = [...question]
    for (const [key, question] of temporaryQuestions.entries()) {
      if (key === index) {
        question.title = value
      }
    }
    setQuestions(temporaryQuestions)
  }

  const onAddQuestion = useCallback(() => {
    const data = [
      ...question,
      { title: '', key: question.length + Math.floor(Math.random() * 100) },
    ]
    setQuestions(data)
  }, [question])

  const onDeleteButton = (key: number) => {
    const data = [...question]
    const questions = data.filter((a) => a.key !== key)
    setQuestions(questions)
  }

  const onQuestionBankAddButton = (
    questions: Array<IQuestionOptions> | undefined
  ): void => {
    const data = [...question]
    if (questions) {
      for (const a of questions) {
        data.push({
          title: a.question,
          key: question.length + Math.floor(Math.random() * 100),
        })
      }
    }
    setQuestions(data)
  }

  useEffect(() => {
    if (questions) setQuestions([...questions])
  }, [questions])

  useEffect(() => {
    if (question?.length === 1) {
      setDeleteDisable(true)
    } else {
      setDeleteDisable(false)
    }
  }, [question])

  return (
    <AddQuestion
      description={description}
      questions={question}
      title={title}
      addQuestionLabel={addQuestionLabel}
      goToButtonLabel={goToButtonLabel}
      questionLabel={questionLabel}
      onChange={onChange}
      onAddQuestion={onAddQuestion}
      onDeleteButton={onDeleteButton}
      isDeleteDisable={isDeleteDisable}
      onQuestionBankAddButton={onQuestionBankAddButton}
    />
  )
}
