import { Request, Response } from 'express';

export const getExcursions = (req: Request, res: Response) => {
  res.json({
    msg: 'get excursions',
  });
};

export const getExcursion = (req: Request, res: Response) => {
  const { id } = req.params;
  res.json({
    msg: 'get excursion',
    id,
  });
};

export const deleteExcursion = (req: Request, res: Response) => {
  const { id } = req.params;
  res.json({
    msg: 'delete excursion',
    id,
  });
};

export const postExcursion = (req: Request, res: Response) => {
  const { body } = req;
  res.json({
    msg: 'post excursion',
    body,
  });
};

export const updateExcursion = (req: Request, res: Response) => {
  const { id } = req.params;
  const { body } = req;
  res.json({
    msg: 'update excursion',
    id,
    body,
  });
};
